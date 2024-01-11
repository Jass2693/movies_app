import  { useContext, useEffect } from 'react'
import { useForm } from '../../Hooks/useForm'
import { useFetch } from '../../Hooks/useFetch'
import { Link } from 'react-router-dom'
import { MoviesContext } from '../../context/MoviesContext'



export const Search = () => {
  // const URL1 = 'https://api.themoviedb.org/3/search/movie?query=Barbie&include_adult=false&language=en-US&page=1?api_key=1ba4e71d287254ba9167f332d45021e0'
  // const URL = "https://api.themoviedb.org/3/movie/popular?api_key=1ba4e71d287254ba9167f332d45021e0"
  const {handleMovieCard,searchMovie,setSearchMovie} = useContext(MoviesContext)
  const {movies} = useFetch(`https://api.themoviedb.org/3/search/movie?query=${searchMovie}&include_adult=false&language=en-US&page=1`)
  const imageUrl = "https://image.tmdb.org/t/p/w200"
 

  

  const handleSubmit = (event) => {
    event.preventDefault()
   
  }
  const handleChange = (event) => {
    
    
    setSearchMovie(event.target.value)
  
}



useEffect(() => {
 
}, [searchMovie])

  

  return (
    <>
    
    <form onSubmit={handleSubmit}
    >
      <input 
      type="text" 
      placeholder='¿Que estas buscando?'
      onChange={handleChange}
      value={searchMovie}
      name='searchMovie'
      className='input_search'
     />
    </form>

    <div className='filterList_container'
    
    style={{marginTop: "20px"}}>
      {
        (movies.length > 0) ?
         movies.map(movie => (
          <div 
        
          className='movieList_item' key={movie.id}>
            <Link to="/movie-item" onClick={()=> handleMovieCard(movie.id)}>
              {
                (movie.poster_path !== null) ?
                <img 
                className='movie_item_img'
                src={`${imageUrl}${movie.poster_path}`} 
                alt={movie.original_title} />
                  : 
               ""
              }
            
            </Link>
  
          </div>
        )) : <span
          style={{marginTop: "30px", fontSize: "larger", textAlign: "center"}}
        >No se encontraron peliculas</span> 
          
      } 
    </div>
    </>
  )
}
