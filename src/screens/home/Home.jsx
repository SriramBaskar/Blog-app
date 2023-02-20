import React from 'react'
import Post from '../../components/navbar/post/Post'
import { useFetch } from './../../hooks/usefetch'
import './Home.css'

export default function Home() {

  const {data : posts, error, isPending} = useFetch('https://jsonplaceholder.typicode.com/posts') //data is state in useFetch & importing from useFetch & reffering like 'as to 'posts' which act as state 
  
  return (
    <div className='container'>
      { //conditional Rending
        posts && posts.map((post) => {
          return <Post post={post} key={post.id}/>
        })
      }
      {
        error && <p>{error}</p>
      }
      {
        isPending && <h3 style={{color: '#7B7D7D'}}>Loading...,,</h3>
      }
    </div>
  )
}
