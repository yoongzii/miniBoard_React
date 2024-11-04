//PostList
import PostItem from './PostItem'
import { useNavigate } from 'react-router-dom'

export default function PostList({posts}) {
  const navigate = useNavigate()
  return (
    <>
      <ul>
        {posts.map(post => <PostItem
          key={post.id} post={post}
          onClick={() => navigate(`/post/${post.id}`)}
        />)}
      </ul>
    </>
  )
}