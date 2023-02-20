import React from 'react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Appsubmitbutton from '../../components/appSubmitButton/Appsubmitbutton'
import { useFetch } from '../../hooks/usefetch'
import './Postdetail.css'

export default function Postdetail() {

  const location = useLocation() //useLocation fron react router dom

  const { state: post } = location // reseving state as pror from Post.jsx

  const {data, error, optiondata} = useFetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, 'DELETE')

  const navigate = useNavigate()

  const handleEdit = () => {
    navigate(`/edit/${post.id}`, {state:post})
  }

  const handleDelete = () => {
    optiondata()
  }
  
  useEffect(() =>  {
    if (data.length !== 0) {
      const timer = setTimeout(() => navigate('/'),3000)
      return () => clearTimeout(timer)
    }
  }, [data, navigate])

  return (
    <div className='container outer'>
      <div classname="jumbotron"> 
        <h1 classname="display-4">{post.title}</h1>
        <p classname="lead">{post.body}</p>

        {
          data.length !== 0 && (
            <div className="alert alert-success" role="alert">
              Post Delete Successfully!
            </div>
          )
        }

        {
          error && (
            <div class="alert alert-danger" role="alert">
             {error}
            </div>
          )
        }

        <div className='float-end'>
          <Appsubmitbutton onClick={handleEdit} title='Edit' />
        </div>

        <div className='float-end'>
          <Appsubmitbutton onClick={handleDelete} title='Delete' />
        </div>
      </div>
    </div>
  )
}
