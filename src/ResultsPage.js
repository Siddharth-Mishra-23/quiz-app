import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ResultsPage.css';

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, userAnswers, questions } = location.state || {};
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const savedHighScore = localStorage.getItem('quizHighScore');
    if (savedHighScore) {
      setHighScore(Number(savedHighScore));
    }

    if (score > Number(savedHighScore)) {
      localStorage.setItem('quizHighScore', score);
      setHighScore(score);
    }
  }, [score]);

  if (!userAnswers) {
    return (
      <div className="results-container">
        <h1>No results found. Please start the quiz.</h1>
        <button onClick={() => navigate('/')}>Restart Quiz</button>
      </div>
    );
  }

  const handleRestartQuiz = () => {
    navigate('/');
  };

  return (
    <div className="results-container">
      <h1>Quiz Results</h1>
      <p>You scored {score} out of {questions.length}</p>
      <div className="high-score-container">
  <p className="high-score">High Score: {highScore}</p>
</div>
      <div className="summary-section">
        {questions.map((question, index) => {
          const userAnswer = userAnswers[index];
          const isCorrect = userAnswer.isCorrect;
          const correctOption = question.answerOptions.find(option => option.isCorrect);

          return (
            <div key={index} className="question-summary">
              <h3>Question {index + 1}: {question.questionText}</h3>
              <p>Your Answer: <span style={{ color: isCorrect ? 'green' : 'red' }}>{userAnswer.selectedAnswer}</span></p>
              {!isCorrect && <p>Correct Answer: <span style={{ color: 'green' }}>{correctOption.answerText}</span></p>}
            </div>
          );
        })}
      </div>

      <button onClick={handleRestartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default ResultsPage;