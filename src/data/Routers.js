import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddNewRecord from '../Pages/addLinkPage/AddNewRecord'
import MainPage from '../Pages/mainPage/MainPage'
import ResultPage from '../Pages/resultsPage/Result'

function Routers() {
  return (
    <Routes> 
        <Route path="/" exact element={<MainPage/>} />
        <Route path="/result/:id" exact element={<ResultPage/>}/>
        <Route path="/addLinkPage/AddNewRecord/" exact element={<AddNewRecord/>}/>
    </Routes>
  )
}

export default Routers