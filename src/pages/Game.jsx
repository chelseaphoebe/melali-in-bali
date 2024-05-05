import Footer from "../components/Footer";
import React, { useState, useEffect } from 'react';
import './Game.css';
import img1 from '../images/background1.jpg'
import Swal from 'sweetalert2';

const gridSize = 20;
const gridCount = 20;

function Navbar() {
  return (
      <h1 style={{fontSize: '36px', background: 'transparent',marginTop:'150px',fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}> Get That Beach!</h1>
  )
const handleStartGame = () => {
    if (onStartGame) {
      onStartGame();
    }
  };
  return (
    <h1 style={{ fontSize: '36px', background: 'transparent', marginTop: '150px', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }} onClick={handleStartGame}> Get That Beach!</h1>
  );
}

function ColorPicker({ onColorChange }) {
  const [color, setColor] = useState('#00ff00');

  const handleColorChange = (e) => {
    setColor(e.target.value);
    onColorChange(e.target.value);
  };

  return (
    <div>
      <h2><label htmlFor="color-picker">Choose Color:</label></h2>
      <input
        id="color-picker"
        type="color"
        value={color}
        onChange={handleColorChange} />
    </div>
  );
}

function Game(props) {
  const [snake, setSnake] = useState([{ x: 2, y: 2 }]);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState('RIGHT');
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const restartGame = () => {
    setSnake([{ x: 2, y: 2 }]);
    setFood({ x: 5, y: 5 });
    setDirection('RIGHT');
    setGameOver(false);
    setScore(0);
    setGameStarted(true);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'W','w':
          setDirection('UP');
          break;
        case 'S','s':
          setDirection('DOWN');
          break;
        case 'A','a':
          setDirection('LEFT');
          break;
        case 'D','d':
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
        const newScore = score + 1;
        setScore(newScore);

        if (newScore > highestScore) {
          setHighestScore(newScore);
        }

        if (newScore === 10) {
          Swal.fire({
            title: 'Selamat!',
            text: 'Anda mendapatkan voucher discount 20%!',
            icon: 'success',
            confirmButtonText: 'Oke'
          });
        }
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

    if (gameStarted && !gameOver) {
      const gameLoop = setInterval(() => {
        moveSnake();
      }, 200);

      return () => clearInterval(gameLoop);
    }
  }, [snake, direction, gameOver, food, restartGame, gameStarted]);

  useEffect(() => {
    const handleStartGamePrompt = () => {
      Swal.fire({
        title: 'Get Ready!',
        text: 'Do you want to start the game?',
        icon: 'info',
        showCancelButton: true,
        confirmButtonText: 'Start',
        cancelButtonText: 'Cancel',
      }).then((result) => {
        if (result.isConfirmed) {
          setGameStarted(true);
          restartGame(); 
        }
      });
    };

    handleStartGamePrompt();
  }, []);

  const handleStartGame = () => {
    setGameStarted(true);
    restartGame();
  };

  return (
    <div className="Game">
      <div className={`game-area ${gameOver ? 'game-over' : ''}`} style={{ backgroundImage: `url(${img1})` }}>
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
          <p>Highest Score: {highestScore}</p>
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
    <div className="App">
      <Navbar onStartGame={() => { }} />
      <div className="game-container">
        <ColorPicker onColorChange={handleColorChange} />
        <Game snakeColor={snakeColor} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
