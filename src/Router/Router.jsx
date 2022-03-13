import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import Movie from '../Components/Movie/Movie'

const Router = () => {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movie" element={<Movie/> }/>
      </Routes>
    </div>
  )
}

export default Router
