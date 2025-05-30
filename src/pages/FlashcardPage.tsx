import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import FlashcardComponent from '../components/FlashcardComponent';
import { flashcards, Flashcard as FlashcardType } from '../data/flashcards';

const FlashcardPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const navigate = useNavigate();

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [categoryCards, setCategoryCards] = useState<FlashcardType[]>([]);
  const [incorrectAnswers, setIncorrectAnswers] = useState<FlashcardType[]>([]);
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    if (categoryName) {
      const filteredCards = flashcards.filter(card => card.category === categoryName);
      setCategoryCards(filteredCards);
      setCurrentCardIndex(0); // Reset index when category changes
      setIncorrectAnswers([]); // Reset incorrect answers
      setShowSummary(false); // Reset summary view
    }
  }, [categoryName]);

  const handleAnswer = (isCorrect: boolean) => {
    if (!isCorrect) {
      setIncorrectAnswers(prev => [...prev, categoryCards[currentCardIndex]]);
    }
    // Move to the next card or show summary
    if (currentCardIndex < categoryCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      // Last card answered
      setShowSummary(true);
    }
  };

  if (!categoryName) {
    return <div>Category not specified. <Link to="/select-category">Select a category</Link></div>;
  }

  if (categoryCards.length === 0 && !showSummary) { // Check also for !showSummary to avoid flash of this message
    return <div>Loading cards or no cards found for category: {categoryName}. <Link to="/select-category">Select another</Link></div>;
  }

  if (showSummary) {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>Study Session Complete!</h2>
        <p>Category: {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</p>
        <p>Total cards: {categoryCards.length}</p>
        <p>Correct answers: {categoryCards.length - incorrectAnswers.length}</p>
        <p>Incorrect answers: {incorrectAnswers.length}</p>
        {incorrectAnswers.length > 0 && (
          <div>
            <h4>Cards to review:</h4>
            <ul>
              {incorrectAnswers.map(card => <li key={card.spanish}>{card.spanish} - {card.english}</li>)}
            </ul>
            {/* Later, a button to "Redo wrong cards" will go here */}
          </div>
        )}
        <div style={{ marginTop: '20px' }}>
          <button onClick={() => navigate(`/study/${categoryName}`)} style={{ marginRight: '10px' }}>Study Again</button>
          <Link to="/select-category" style={{ marginRight: '10px' }}>Change Category</Link>
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    );
  }
  
  const cardToDisplay = categoryCards[currentCardIndex];
  
  // Need to ensure cardToDisplay is not undefined before rendering FlashcardComponent
  if (!cardToDisplay) {
     return <div>Loading card... <Link to="/select-category">Select another category</Link></div>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
      <h2>Studying: {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} ({currentCardIndex + 1}/{categoryCards.length})</h2>
      <FlashcardComponent card={cardToDisplay} onAnswer={handleAnswer} />
      <div style={{ marginTop: '20px' }}>
        <Link to="/select-category" style={{ marginRight: '10px' }}>Change Category</Link>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default FlashcardPage; 