import React from 'react'
import './testing.css'


const Posts = ({posts, loading}) => {

    if (loading) {
        return <h2>Loading...</h2>
    }


  return (
    <ul>
        {posts.map(post => (
            <li key={post.id} id="style"> {post.title}</li>
        ))}
    </ul>
  )
}

export default Posts