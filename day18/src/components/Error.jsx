import { useRouteError } from "react-router-dom"

const Error = () => {
    const error = useRouteError()
    console.log(error)
  return (
    <div>
      <h1>Oops</h1>
      <p>Sorry, an unexpected error occured</p>
      {error?(
        <p style={{ color: "#aaa", fontSize: "1rem" }}>
          <i>{error.statusText || error.message}</i>
        </p>
      ):
      <p>No specific error available</p>
      }
    </div>
  )
}

export default Error
