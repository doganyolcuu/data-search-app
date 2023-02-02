import React from 'react'
import './Button.scss'

function Button(props) {
  const {title} = props;
    return (
    <button className='componentBtn'>{title}</button>
  )
}

export default Button