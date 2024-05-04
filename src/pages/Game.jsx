import React, { useState, useEffect } from 'react';
import './Game.css';

const gridSize = 20;
const gridCount = 20;
const gameOverDelay = 20000;

function Navbar() {
  return (
    <nav style={{ height: '200px', backgroundColor: 'white', color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <h1> Get That Beach!</h1>
    </nav>
  );
}

const ColorPicker = ({ onColorChange }) => {
  const [color, setColor] = useState('#00ff00');

  const handleColorChange = (e) => {
    setColor(e.target.value);
    onColorChange(e.target.value);
  };

  return (
    <div>
     <h2><label htmlFor="color-picker">Choose Snake Color:</label></h2> 
      <input
        id="color-picker"
        type="color"
        value={color}
        onChange={handleColorChange}
      />
    </div>
  );
};

function Game(props) {
  const [snake, setSnake] = useState([{ x: 2, y: 2 }]);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState('RIGHT');
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const restartGame = () => {
    setSnake([{ x: 2, y: 2 }]);
    setFood({ x: 5, y: 5 });
    setDirection('RIGHT');
    setGameOver(false);
    setScore(0);
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          setDirection('UP');
          break;
        case 'ArrowDown':
          setDirection('DOWN');
          break;
        case 'ArrowLeft':
          setDirection('LEFT');
          break;
        case 'ArrowRight':
          setDirection('RIGHT');
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const moveSnake = () => {
      let newSnake = [...snake];
      let head = { ...newSnake[newSnake.length - 1] };

      switch (direction) {
        case 'UP':
          head.y -= 1;
          break;
        case 'DOWN':
          head.y += 1;
          break;
        case 'LEFT':
          head.x -= 1;
          break;
        case 'RIGHT':
          head.x += 1;
          break;
        default:
          break;
      }

      newSnake.push(head);
      newSnake.shift();
      setSnake(newSnake);

      if (head.x === food.x && head.y === food.y) {
        newSnake.unshift({});
        setSnake(newSnake);
        placeFood();
        setScore(score + 1);
      }

      if (head.x >= gridCount || head.x < 0 || head.y >= gridCount || head.y < 0) {
        setGameOver(true);
      }
    };

    const placeFood = () => {
      let x = Math.floor(Math.random() * gridCount);
      let y = Math.floor(Math.random() * gridCount);
      setFood({ x, y });
    };

    const gameLoop = setInterval(() => {
      if (!gameOver) {
        moveSnake();
      } else {
        clearInterval(gameLoop);
        setTimeout(restartGame, 2000);
      }
    }, 200);

    return () => clearInterval(gameLoop);
  }, [snake, direction, gameOver, food, restartGame]);

  return (
    <div className="Game">
      <div className="game-area" style={{ backgroundImage: 'url(beach-background.jpg)' }}>
        {snake.map((segment, index) => (
          <div
            key={index}
            className="snake-segment"
            style={{
              left: `${segment.x * gridSize}px`,
              top: `${segment.y * gridSize}px`,
              backgroundColor: props.snakeColor,
            }}
          />
        ))}
        <div
          className="food"
          style={{
            left: `${food.x * gridSize}px`,
            top: `${food.y * gridSize}px`,
            fontSize: '20px',
          }}
        >
          🏖️
        </div>
      </div>
      {gameOver && (
        <div className="game-over">
          <p>Game Over</p>
          <p>Score: {score}</p>
          <button onClick={restartGame}>Play Again</button>
        </div>
      )}
    </div>
  );
}

function App() {
  const [snakeColor, setSnakeColor] = useState('#00ff00');

  const handleColorChange = (color) => {
    setSnakeColor(color);
  };

  return (
    <div>
      <Navbar />
      <ColorPicker onColorChange={handleColorChange} />
      <Game snakeColor={snakeColor} />
    </div>
  );
}

export default App;
