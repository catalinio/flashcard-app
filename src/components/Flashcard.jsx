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
        perspective: '1000px',
        cursor: 'pointer'
      }}
    >
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.6s',
        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'
      }}>
        {/* Front face */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backfaceVisibility: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          border: '1px solid #ccc',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          padding: '20px',
          fontSize: '1.2em',
          textAlign: 'center'
        }}>
          {question}
        </div>
        
        {/* Back face */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backfaceVisibility: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          border: '1px solid #ccc',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          padding: '20px',
          fontSize: '1.2em',
          textAlign: 'center',
          transform: 'rotateY(180deg)'
        }}>
          {answer}
        </div>
      </div>
    </div>
  );
}

export default Flashcard; 