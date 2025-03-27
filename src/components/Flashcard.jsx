import React, { useState } from 'react';

function Flashcard({ question, answer }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="flashcard" 
      onClick={() => setIsFlipped(!isFlipped)}
      style={{
        width: '300px',
        height: '200px',
        margin: '20px',
        padding: '20px',
        cursor: 'pointer',
        border: '1px solid #ccc',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        transition: 'transform 0.6s',
        transformStyle: 'preserve-3d',
        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'
      }}
    >
      <div style={{
        backfaceVisibility: 'hidden',
        textAlign: 'center',
        fontSize: '1.2em'
      }}>
        {isFlipped ? answer : question}
      </div>
    </div>
  );
}

export default Flashcard; 