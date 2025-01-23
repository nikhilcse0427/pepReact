import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(1);

  function increment() {
    setCounter(counter + 1); // Increment the counter
  }

  function decrement() {
    setCounter(counter - 1); // Decrement the counter
  }

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
