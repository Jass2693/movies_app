import React from 'react'
import { Link } from 'react-router-dom'

export const MenuList = ({settoggleMenu,toggleMenu,handlefilter}) => {
  return (
  
       <>
          
            
          <li onClick={() => handlefilter(12)}><Link to="/movie-filter"
            className='movie_filter'>Adventure</Link></li>

          <li onClick={() => handlefilter(28)}><Link to="/movie-filter"
            className='movie_filter'>Accion</Link></li>

          <li onClick={() => handlefilter(16)}><Link to="/movie-filter"
            className='movie_filter'>Animación</Link></li>

          <li onClick={() => handlefilter(35)}><Link to="/movie-filter"
            className='movie_filter'>Comedy</Link></li>

          <li onClick={() => handlefilter(80)}><Link to="/movie-filter"
            className='movie_filter'>Crime</Link></li>
          <li onClick={() => handlefilter(18)}><Link to="/movie-filter"
            className='movie_filter'>Drama</Link></li>

          <li onClick={() => handlefilter(10751)}><Link to="/movie-filter"
            className='movie_filter'>Family</Link></li>

          <li onClick={() => handlefilter(878)}><Link to="/movie-filter"
            className='movie_filter'>Fiction</Link></li>

          <li onClick={() => handlefilter(14)}><Link to="/movie-filter"
            className='movie_filter'>Fantasy</Link></li>

          <li onClick={() => handlefilter(27)}><Link to="/movie-filter"
            className='movie_filter'>horror</Link></li>
        </>
  )
}
