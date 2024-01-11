import { useContext } from 'react'
import { MoviesContext } from '../context/MoviesContext'
import { Link } from 'react-router-dom'

export const MoviesFilter = () => {

  const imageUrl = "https://image.tmdb.org/t/p/w200"
  const { filterMovies, handleMovieCard } = useContext(MoviesContext)

  //  
  return (
    <div className='filterList_container' >

      {
        (filterMovies.length > 0) ? filterMovies.map(movie => (
          <div className='movieList_item' key={movie.id}>

            <Link to="/movie-item" onClick={() => handleMovieCard(movie.id)}>
              <img 
                className='movie_item_img'
                src={`${imageUrl}${movie.poster_path}`} 
                alt={movie.original_title}  
               />

            </Link>

          </div>
        ))
          : <span style={{ fontSize: "20px", marginTop: "50px"}}>No se encontraron peliculas..</span>
      }
    </div>

  )
}
