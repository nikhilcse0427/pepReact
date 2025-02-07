import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="a1" className="center">
        <h1>Counter: {count}</h1>
        {count > 10 && <p>Great job, you have a high number!</p>}
        {count <0 && <p>Great job, you have a negative number!</p>}
        <div id="p1">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
      </div>
    </>
  );
}

export default App;
