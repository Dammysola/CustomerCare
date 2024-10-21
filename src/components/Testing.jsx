import React, { useEffect, useState } from 'react'
import App_Pagination from './app_Pagination/App_Pagination'
import axios from 'axios'
import Posts from './Posts'
import './testing.css'

const testing = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(10)

    useEffect(()=> {
        const fetchPosts = async () =>{
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setPosts(res.data);
            setLoading(false);
        }

         fetchPosts()
    }, [])

    console.log(posts);


    //Get Current Posts
    const indexOfLastPost = currentPage *postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
  return (
    <div>
        <h2>Pagination Testing</h2>
    <Posts posts={currentPosts} loading={loading}/>
    <App_Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
    
  )
}

export default testing