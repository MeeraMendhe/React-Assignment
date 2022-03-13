import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import Movie from '../Components/Movie/Movie'
import MovieType from '../Components/MovieType/MovieType'

const Router = () => {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movie" element={<Movie/> }/>
          <Route path="/movie/:type" element={<MovieType/>}/>
      </Routes>
    </div>
  )
}

export default Router
