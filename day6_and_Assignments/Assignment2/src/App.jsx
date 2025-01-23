import GreetParent from './components/GreetParent.jsx'
import Parent from './components/Parent.jsx'
import Car from './components/Car';
import Product from './components/Product.jsx';
import Parent6 from './components/Parent6.jsx';
import StatusMessage from './components/StatusMessage.jsx';
import Event from './components/Event.jsx';


import {useState} from 'react'

import './App.css'

function App() {
  
  const [status, setStatus] = useState('loading'); 
  return (
    <>
    {/* 2 */}
    <h1>Welcome to Car</h1>
     <Parent />
    1 
      <GreetParent />
      <Car brand="Honda" />
      {/* No brand provided, defaults to "Toyota" */}
      <Product name="Tablet" price={499.99} isAvailable={true} />
      <Product name="Smartwatch" price={199.99} isAvailable={false} />
      <Parent6 />
      <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Conditional Rendering with Props</h1>
      <StatusMessage status={status} />

      <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Conditional Rendering with Props</h1>
      <StatusMessage status={status} />

      <div style={{ marginTop: '20px' }}>
        <button onClick={() => setStatus('success')}>Set to Success</button>
        <button onClick={() => setStatus('error')} style={{ marginLeft: '10px' }}>
          Set to Error
        </button>
        <button onClick={() => setStatus('loading')} style={{ marginLeft: '10px' }}>
          Set to Loading
        </button>
        <button onClick={() => setStatus('unknown')} style={{ marginLeft: '10px' }}>
          Set to Unknown
        </button>
      </div>
    </div>
    </div>
    <Event />
    </>
  )
}

export default App

