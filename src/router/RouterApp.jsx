import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {  MainLayout } from '../componentes/MainLayout/MainLayout'
import { MoviesFilter } from '../componentes/MoviesFilter'
import { MovieItem } from '../componentes/main/MovieItem'
import { Search } from '../componentes/navbar/Search'


export const RouterApp = () => {
  return (
    <Routes>
        <Route path="/" element={<MainLayout/>}/>
        <Route path="/movie-filter" element={<MoviesFilter/>}/>
        <Route path='/movie-item' element={<MovieItem/>}/>
        <Route path='/search' element={<Search/>}/>
  
       
        


    </Routes>
  )
}
