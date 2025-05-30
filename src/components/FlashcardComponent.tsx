import React, { useState } from 'react';
import { Flashcard as FlashcardType } from '../data/flashcards'; // Assuming FlashcardType is exported from your data file
import './FlashcardComponent.css'; // We'll create this CSS file next

interface FlashcardProps {
  card: FlashcardType;
  onAnswer: (correct: boolean) => void; // For later, to handle right/wrong and move to next card
}

const FlashcardComponent: React.FC<FlashcardProps> = ({ card, onAnswer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    // Only allow flipping from front to back if not already flipped
    // Or, allow flipping back and forth freely by removing this condition
    if (!isFlipped) {
      setIsFlipped(true);
    }
    // If you want to allow flipping back to Spanish by clicking again, 
    // you would use: setIsFlipped(!isFlipped);
    // and then the buttons might need to be outside the card or handle this state.
  };

  const handleAnswer = (correct: boolean) => {
    onAnswer(correct);
    setIsFlipped(false); // Flip back to front for the next card
  };

  return (
    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="flashcard-inner">
        <div className="flashcard-front">
          <p>{card.spanish}</p>
        </div>
        <div className="flashcard-back">
          <p>{card.english}</p>
          {isFlipped && (
            <div className="answer-buttons">
              <button onClick={(e) => { e.stopPropagation(); handleAnswer(true); }} className="button-right">✅ Right</button>
              <button onClick={(e) => { e.stopPropagation(); handleAnswer(false); }} className="button-wrong">❌ Wrong</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlashcardComponent; 