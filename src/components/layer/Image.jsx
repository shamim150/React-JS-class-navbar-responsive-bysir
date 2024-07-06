import React from 'react'
import { Link } from 'react-router-dom'


const Image = ({href, scr, alt, className}) => {
  return (
    
    <Link className={`${className}`} to={href}> 
    <picture>
        <img src={scr} alt={alt} /> 
    </picture>
    </Link>
  )
}

export default Image