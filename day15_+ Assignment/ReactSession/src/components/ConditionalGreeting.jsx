
const ConditionalGreeting = () => {
  const isLoggedIn = true;
  return (
    <div>
      {(isLoggedIn)?<h1>Yes user is loggedin</h1>:<h1>user is Not log</h1>}
      {
        isLoggedIn && <h1>Welcome user</h1>
      }
      {
        !isLoggedIn && <h1>Please Log in</h1>
      }

      {isLoggedIn? <UserGreeting />: <GuestGreeting />}
    </div>
  )
  function UserGreeting(){
    return(
      <>
      <p>UserGreeting</p>
      </>
    )
  }
  function GuestGreeting(){
    return(
      <>
      <p>GuestGreeting</p>
      </>
    )
  }
}

export default ConditionalGreeting
