import { useEffect, useLayoutEffect } from 'react'
import './App.css'

function App() {
  console.info('Render 1');

  useEffect(() => {
    console.info('Effect');
    return () => {
      console.info('Effect cleanup');
    };
  });

  useLayoutEffect(() => {
    console.info('Layout effect');
    return () => {
      console.info('Layout effect cleanup');
    }
  });

  console.info('Render 2');
  return <div>tacos</div>
}

export default App
