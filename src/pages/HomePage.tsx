import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="home-page-container">
      <h1>Spanish Flashcards</h1>
      <nav className="home-navigation">
        <ul>
          <li>
            <Link to="/select-category" className="button-study">Study Mode</Link>
          </li>
          <li>
            <Link to="/select-category" className="button-quiz">Quiz Mode</Link>
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