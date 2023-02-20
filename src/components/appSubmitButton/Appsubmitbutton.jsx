import React from 'react'
import { useThemeContext } from '../../hooks/useThemeContext'
import './Appsubmitbutton.css'

export default function Appsubmitbutton({onClick, title}) {
  
    const {theme} = useThemeContext()
    return (
    <button 
        type='submit' 
        onClick={onClick}
        className= {`btn ${theme}btn`}>
        {title}
    </button>
  )
}
