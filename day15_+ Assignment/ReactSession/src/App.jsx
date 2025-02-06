
import './App.css'
import ConditionalGreeting from './components/ConditionalGreeting.jsx'
// import FetchResources from './components/FetchResources.jsx'
// import FetchWithParams from './components/FetchWithParams.jsx'
// import FetchWithAxios from './components/FetchWithAxios.jsx'
// import PostResource from './components/PostResourse.jsx'
import FocusInputUseRef from './components/FocusInputUseRef.jsx'
import PreviousCountUseRef from './components/PreviousCountUseRef.jsx'
import SignupForm from './components/SignupForm.jsx'

function App() {

  return (
    <>
      {/* <FetchResources />
      <FetchWithAxios />
      <FetchWithParams />
      <PostResource /> */}
      <FocusInputUseRef />
      <PreviousCountUseRef />
      <ConditionalGreeting />
      <SignupForm />
    </>
  )
}

export default App
