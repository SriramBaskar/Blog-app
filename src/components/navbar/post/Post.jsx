import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useThemeContext } from '../../../hooks/useThemeContext'
import './Post.css'

export default function Post({post}) {

    const {theme} = useThemeContext()

    const navigate = useNavigate() //useing nagivation hook to navigation 

    const handleClick = () => {
        navigate(`/post/${post.id}`, {state:post}) //nagivating to state to postdetail.jsx
    }

    return (
        <div className={`card ${theme}card`} onClick={handleClick}>
            <div className="card-header">
                {post.title}
            </div>
            <div className="card-body">
                <p className="card-text">
                    {post.body}
                </p>
            </div>
        </div>
    )
}
