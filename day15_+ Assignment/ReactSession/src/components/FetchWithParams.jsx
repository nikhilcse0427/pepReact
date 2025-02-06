import {useState, useEffect} from 'react'
import axios from 'axios'
const FetchWithParams = () => {
  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/${resourceType}?_limit=5`)
    .then(response=>setItems(response.data))
    .catch((error)=>{
      console.log("error: ",error)
  })
  },[resourceType])
  return (
    <div>
      <button onClick={()=>setResourceType('posts')}>Get Posts</button>
      <button onClick={()=>setResourceType('posts')}>Get Posts</button>
      <button onClick={()=>setResourceType('users')}>Get Users</button>
      <h1>{resourceType}</h1>
      <ul>
        {items.map((item)=>(
          <li key={item}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  )
}

export default FetchWithParams
