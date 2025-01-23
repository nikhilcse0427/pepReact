import { useState, Component } from 'react';

const Event = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>React Event Handling Examples</h1>
      <h2>1. Handling Click Events</h2>
      <ClickButton />

      <h2>2. Form Submission Handling</h2>
      <FormSubmission />

      <h2>3. Event Binding in Class Components</h2>
      <Counter />

      <h2>4. Synthetic Events</h2>
      <SyntheticEventExample />

      <h2>5. Event Delegation</h2>
      <EventDelegation />

      <h2>6. Mouse Events</h2>
      <MouseEventComponent />
    </div>
  );
};

// 1. Handling Click Events
const ClickButton = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return <button onClick={handleClick}>Click Me</button>;
};

// 2. Form Submission Handling
const FormSubmission = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Input value:', inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter text"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

// 3. Event Binding in Class Components
class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// 4. Synthetic Events
const SyntheticEventExample = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    console.log('Synthetic Event Type:', event.type);
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something"
      />
      <p>Input Value: {inputValue}</p>
    </div>
  );
};

// 5. Event Delegation
const EventDelegation = () => {
  const handleClick = (event) => {
    if (event.target.tagName === 'LI') {
      console.log('Clicked item:', event.target.textContent);
    }
  };

  return (
    <ul onClick={handleClick}>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  );
};

// 6. Mouse Events
const MouseEventComponent = () => {
  const [bgColor, setBgColor] = useState('white');

  const handleMouseEnter = () => setBgColor('lightblue');
  const handleMouseLeave = () => setBgColor('white');

  return (
    <div
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: bgColor,
        textAlign: 'center',
        lineHeight: '200px',
        border: '1px solid #ccc',
        margin: '10px auto',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Hover Over Me
    </div>
  );
};

export default Event;
