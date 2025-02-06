
import {useRef} from 'react'
const FocusInputUseRef = () => {
  const handleClick = ()=>{
    inputRef.current.focus()
  }
  const inputRef = useRef(null)
  return (
    <>
      <input type="text" placeholder="Enter text" ref={inputRef} />
      <button onClick={handleClick}>Focus</button>
    </>
  )
}

export default FocusInputUseRef
