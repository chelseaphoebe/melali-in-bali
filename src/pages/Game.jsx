import React, { useState, useEffect } from 'react';
import background from './images/background.jpg';
import bali from './images/bali.jpg';
import './Game.css'; 

function Game() {
  const [score, setScore] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(prevItems => [
        ...prevItems,
        {
          id: Math.random(),
          x: Math.random() * window.innerWidth,
          y: -100,
        },
      ]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (id) => {
    // Tangani ketika item diklik
    setItems(items.filter(item => item.id !== id));
    setScore(score + 1);
  };

  return (
    <div style={{ backgroundImage: `url(${background})`, height: '100vh', position: 'relative' }}>
      {items.map(item => (
        <img
          key={item.id}
          src={bali}
          alt="Bali"
          style={{ position: 'absolute', left: item.x, top: item.y }}
          onClick={() => handleClick(item.id)}
        />
      ))}
      <div className="score">Score: {score}</div>
    </div>
  );
}

export default Game;
