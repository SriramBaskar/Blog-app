import React, { useEffect, useState } from 'react'
import { useFetch } from '../../hooks/usefetch'
import './Createpost.css'
import { useNavigate } from 'react-router-dom'
import Appsubmitbutton from '../../components/appSubmitButton/Appsubmitbutton'

export default function Createpost() {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [validationError, setValidationError] = useState('')

  const navigate = useNavigate()

  const {data, error, optiondata} = useFetch('https://jsonplaceholder.typicode.com/posts', 'POST')
  
  const handleSubmit = (event) => {
    event.preventDefault()

    if (!title) {
      setValidationError('Title should not be empty')
      return
    }

    if (!content) {
      setValidationError('Content should not be empty')
      return
    }
    setValidationError('')
    console.log({title, body: content, userId:1}) //In API content is reffered as 'body' so content reffered as "body : content". 'title' key value name is same so onluy "title".
    optiondata({title, body: content, userId:1})
  }

  useEffect(() =>  {
    if (data.length !== 0) {
      const timer = setTimeout(() => navigate('/'),3000)
      return () => clearTimeout(timer)
    }
  }, [data, navigate])

  return (
    <div className='outerContainer'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            <h6>Title:</h6>
          </label>
          <input
            type='text'
            className='form-control'
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>
            <h6>Content:</h6>
          </label>
          <textarea
            className='form-control'
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
        </div>
        {
          validationError && (
          <div className="alert alert-danger" role="alert">
            {validationError}
          </div>
        )}

        {
          data.length !== 0 && (
            <div className="alert alert-success" role="alert">
              Post Created Successfully!
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
          <Appsubmitbutton title='Create'/>
        </div>
      </form>
    </div>
  )
}
