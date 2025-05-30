import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategorySelectionPage from './pages/CategorySelectionPage';
import FlashcardPage from './pages/FlashcardPage'; 
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* 
        The path for category selection will depend on the mode (study/quiz). 
        For now, let's assume a generic path, or handle mode inside CategorySelectionPage.
        A more robust solution might be /study/select or /quiz/select 
      */}
      <Route path="/select-category" element={<CategorySelectionPage />} />
      <Route path="/study/:categoryName" element={<FlashcardPage />} /> 
      <Route path="*" element={<Navigate to="/" />} /> {/* Redirect unknown paths to Home */}
    </Routes>
  );
}

export default App; 