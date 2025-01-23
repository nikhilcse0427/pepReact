import React, { useState } from 'react';

function ComplexOnClick() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log('Button clicked');
    
    // Complex logic
    if (count % 2 === 0) {
      console.log('Count is even');
    } else {
      console.log('Count is odd');
    }

    // Simulating another action
    setTimeout(() => {
      console.log('Updating count...');
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default ComplexOnClick;
