import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="home-page-container">
      <h1>Spanish Flashcards</h1>
      <nav className="home-navigation">
        <ul>
          <li>
            <a href="#/study" className="button-study">Study Mode</a>
          </li>
          <li>
            <a href="#/quiz" className="button-quiz">Quiz Mode</a>
          </li>
          <li>
            <a href="#/stats" className="button-stats">Stats Page</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage; 