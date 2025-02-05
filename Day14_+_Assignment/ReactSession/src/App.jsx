import FetchResources from './components/FetchResources.jsx'
import './App.css'
import FetchWithParams from './components/FetchWithParams.jsx'
import FetchWithAxios from './components/FetchWithAxios.jsx'

function App() {

  return (
    <>
      <FetchResources />
      <FetchWithAxios />
      <FetchWithParams />
    </>
  )
}

export default App
