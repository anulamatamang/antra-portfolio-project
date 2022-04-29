import React from 'react'
import './Card.css'

function Card(props) {
    const {title, description, imageUrl} = props;
  return (
    <div class='card'> 
        <h3>{title}</h3>
        <p>{description}</p>
        
    </div>
  )
}

export default Card