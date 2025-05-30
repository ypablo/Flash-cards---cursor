import React from 'react';
import { Link } from 'react-router-dom';
import { flashcards } from '../data/flashcards';

// Get unique categories
const categories = Array.from(new Set(flashcards.map(card => card.category)));

interface CategorySelectionPageProps {
  // Later, we'll add a prop to determine if we're in "study" or "quiz" mode
  // onSelectCategory: (category: string) => void; 
}

const CategorySelectionPage: React.FC<CategorySelectionPageProps> = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Select a Category</h2>
      <nav>
        <ul>
          {categories.map(category => (
            <li key={category} style={{ marginBottom: '10px' }}>
              <Link 
                to={`/study/${category}`}
                style={{
                  display: 'inline-block',
                  padding: '10px 20px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  textDecoration: 'none',
                  color: '#333',
                  backgroundColor: '#f9f9f9'
                }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/">Back to Home</Link>
      </nav>
    </div>
  );
};

export default CategorySelectionPage; 