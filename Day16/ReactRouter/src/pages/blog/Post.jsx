import{useParams} from 'react-router-dom'
const Post = () => {
  const {postID} = useParams()
  return (
    <div>
      <h1>Viewing post: {postID}</h1>
    </div>
  )
}

export default Post
