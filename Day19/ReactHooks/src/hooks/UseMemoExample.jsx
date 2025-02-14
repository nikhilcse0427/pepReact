/* eslint-disable no-unused-vars */
import {useState} from 'react'

const UseMemoExample = () => {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState('false')
  const calc = longFunction(number)
  const cssStyle = {backgroundColor:dark?'white':'black',color:dark?'black':'white'}
  return (
    <div style={cssStyle}>
      <h2>useMemo example</h2>
      <input 
      type="number" 
      value={number}
      onChange={(e)=>{setNumber(e.target.value)}}
      placeholder='Enter a value' />
      <h2>Calculation:{calc}</h2>
      <button onClick={()=>{setDark}}>Toggle</button>
    </div>
  )
  function longFunction(num){
    for(let i=0;i<100000;i++){
       
    }
  }
}

export default UseMemoExample
