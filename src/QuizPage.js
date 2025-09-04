import './QuizPage.css';
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import localQuestions from './questions.json';

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timer, setTimer] = useState(20);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const normalizeData = (apiData) => {
    return apiData.map((item) => {
      const allAnswers = [
        ...item.incorrect_answers,
        item.correct_answer,
      ];
      const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);
      
      const answerOptions = shuffledAnswers.map((answer) => ({
        answerText: answer,
        isCorrect: answer === item.correct_answer,
      }));

      return {
        questionText: item.question,
        answerOptions: answerOptions,
      };
    });
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://opentdb.com/api.php?amount=5&type=multiple');
        const normalizedQuestions = normalizeData(response.data.results);
        setQuestions(normalizedQuestions);
        setLoading(false);
      } catch (err) {
        const shuffledLocalQuestions = shuffleArray([...localQuestions]).slice(0, 5);
        setQuestions(shuffledLocalQuestions);
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  const handleAnswerOptionClick = useCallback((isCorrect, answerText) => {
    setTimer(20);

    const newAnswers = [...userAnswers, { question: questions[currentQuestion].questionText, selectedAnswer: answerText, isCorrect }];
    setUserAnswers(newAnswers);

    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      navigate('/results', { state: { score, userAnswers: newAnswers, questions } });
    }
  }, [currentQuestion, userAnswers, score, navigate, questions]);

  useEffect(() => {
    if (timer === 0) {
      handleAnswerOptionClick(false, 'Time out');
    }
    const countdown = setInterval(() => {
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);

    return () => clearInterval(countdown);
  }, [timer, handleAnswerOptionClick]);

  if (loading) {
    return <div className="quiz-container">Loading...</div>;
  }

  return (
    <div className="quiz-container">
      <div className="timer">Time Left: {timer}s</div>
      
      <div className="question-section">
        <div className="question-count">
          <span>Question {currentQuestion + 1}</span>/{questions.length}
        </div>
        <div className="question-text">{questions[currentQuestion].questionText}</div>
      </div>
      
      <div className="answer-section">
        {questions[currentQuestion].answerOptions.map((option, index) => (
          <button key={index} onClick={() => handleAnswerOptionClick(option.isCorrect, option.answerText)}>
            {option.answerText}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizPage;