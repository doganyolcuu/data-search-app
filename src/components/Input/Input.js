import React from 'react'
import './Input.scss'

function Input({plcHolder, setSearchValue}) {
  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }
  return (
   <input onChange={handleChange} className= 'jrinput' type="text" placeholder={plcHolder}/>
  )
}
export default Input