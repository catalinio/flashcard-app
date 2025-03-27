import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import Flashcard from './components/Flashcard';

function App() {
  const [flashcards, setFlashcards] = useState([]);
  const [currentCard, setCurrentCard] = useState(0);
  const [title, setTitle] = useState('Flashcards');

  useEffect(() => {
    // Load your CSV file
    fetch('/flashcards.csv')
      .then(response => response.text())
      .then(csv => {
        Papa.parse(csv, {
          complete: (results) => {
            // Get the title from the first row
            if (results.data.length > 0 && results.data[0][0] === 'title') {
              setTitle(results.data[0][1]);
            }
            // Set the flashcards starting from the second row
            setFlashcards(results.data.slice(1).map(row => ({
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
      <h1 style={{ color: '#333', marginBottom: '30px' }}>{title}</h1>
      {flashcards.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Flashcard 
            key={currentCard}
            question={flashcards[currentCard].question}
            answer={flashcards[currentCard].answer}
          />
          <div style={{ marginTop: '40px' }}>
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