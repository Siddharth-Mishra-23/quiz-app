import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const fullText = "Test your knowledge with our multiple-choice quiz. You'll have 20 seconds to answer each of the 5 questions. Your score and a summary will be displayed at the end. Good luck!";
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const typingInterval = setInterval(() => {
        setDisplayText(prevText => prevText + fullText[index]);
        setIndex(prevIndex => prevIndex + 1);
      }, 50);
      return () => clearInterval(typingInterval);
    }
  }, [index, fullText]);

  const handleStartQuiz = () => {
    navigate('/quiz');
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="heading-glitter-permanent">Welcome to the Quiz App!</h1>
        <p className="glitter-text">{displayText}</p>
        <button className="start-button" onClick={handleStartQuiz}>Start Quiz</button>
      </div>
    </div>
  );
};

export default HomePage;