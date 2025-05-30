export interface Flashcard {
  spanish: string;
  english: string;
  category: string;
  quiz: {
    type: string;
    options?: string[]; // Optional: only for multiple-choice
  };
}

export const flashcards: Flashcard[] = [
  // Animals
  {
    spanish: "el perro",
    english: "the dog",
    category: "animals",
    quiz: { type: "multiple-choice", options: ["the cat", "the bird", "the dog", "the fish"] },
  },
  {
    spanish: "el gato",
    english: "the cat",
    category: "animals",
    quiz: { type: "multiple-choice", options: ["the dog", "the house", "the cat", "the bird"] },
  },
  {
    spanish: "el pájaro",
    english: "the bird",
    category: "animals",
    quiz: { type: "fill-in-the-blank" },
  },
  // Food
  {
    spanish: "la manzana",
    english: "the apple",
    category: "food",
    quiz: { type: "multiple-choice", options: ["the banana", "the orange", "the apple", "the grape"] },
  },
  {
    spanish: "el plátano",
    english: "the banana",
    category: "food",
    quiz: { type: "fill-in-the-blank" },
  },
  {
    spanish: "la naranja",
    english: "the orange",
    category: "food",
    quiz: { type: "multiple-choice", options: ["the apple", "the lemon", "the orange", "the pear"] },
  },
  // Verbs
  {
    spanish: "correr",
    english: "to run",
    category: "verbs",
    quiz: { type: "fill-in-the-blank" },
  },
  {
    spanish: "comer",
    english: "to eat",
    category: "verbs",
    quiz: { type: "multiple-choice", options: ["to sleep", "to drink", "to eat", "to read"] },
  },
  {
    spanish: "beber",
    english: "to drink",
    category: "verbs",
    quiz: { type: "fill-in-the-blank" },
  },
]; 