import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready(); // Подготовка WebApp
  }, []);

  const onClose = () => {
    tg.close(); // Закрытие WebApp
  };

  return (
    <div className='App'>
      <p>work</p>
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;

