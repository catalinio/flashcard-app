import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import Flashcard from './components/Flashcard';

function App() {
  const [flashcards, setFlashcards] = useState([]);
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    // Load your CSV file
    fetch('/flashcards.csv')
      .then(response => response.text())
      .then(csv => {
        Papa.parse(csv, {
          complete: (results) => {
            setFlashcards(results.data.map(row => ({
              question: row[0],
              answer: row[1]
            })));
          }
        });
      });
  }, []);

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % flashcards.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{ color: '#333', marginBottom: '30px' }}>Flashcards</h1>
      {flashcards.length > 0 && (
        <div>
          <Flashcard 
            question={flashcards[currentCard].question}
            answer={flashcards[currentCard].answer}
          />
          <div style={{ marginTop: '20px' }}>
            <button 
              onClick={prevCard}
              style={{
                padding: '10px 20px',
                margin: '0 10px',
                fontSize: '16px',
                cursor: 'pointer',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px'
              }}
            >
              Previous
            </button>
            <button 
              onClick={nextCard}
              style={{
                padding: '10px 20px',
                margin: '0 10px',
                fontSize: '16px',
                cursor: 'pointer',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px'
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App; 