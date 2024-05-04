import React, { useState, useEffect } from 'react';
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
    // Handle when an item is clicked
    setItems(items.filter(item => item.id !== id));
    setScore(score + 1);
  };

  return (
    <div>
      {items.map(item => (
        <div
          key={item.id} // Added a key prop for each item for React to efficiently update and identify each element in the list.
          className="item" // Assuming there's a CSS class to style the items.
          style={{ position: 'absolute', left: item.x, top: item.y }}
          onClick={() => handleClick(item.id)}
        />
      ))}
      <div className="score">Score: {score}</div>
    </div>
  );
}

export default Game;
