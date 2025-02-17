/* eslint-disable no-unused-vars */
import { toggleTheme } from "./themeSlice"
import {useSelector,useDispatch} from 'react-redux' 
const ThemeToggle = () => {
  const theme = useSelector(state=>state.theme.mode)
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=>dispatch(toggleTheme('dark'))}>
        Switch to dark Mode
      </button>

      <button onClick={()=>dispatch(toggleTheme('light'))}>
        Switch to Light Mode
      </button>

      <button onClick={()=>dispatch(toggleTheme())}>
        Switch to Light Mode
      </button>
    </div>
  )
}

export default ThemeToggle
