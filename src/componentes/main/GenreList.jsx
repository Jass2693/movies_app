import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { MoviesContext } from '../../context/MoviesContext'
import { useFetch } from '../../Hooks/useFetch'


export const GenreList = ({ props }) => {
  const URL = `https://api.themoviedb.org/3/movie/${props}?api_key=1ba4e71d287254ba9167f332d45021e0`
  const imageUrl = "https://image.tmdb.org/t/p/w200"
  const { movies } = useFetch(URL)
  const { handleMovieCard } = useContext(MoviesContext)
  const capitalizeProp = props.toUpperCase()
  const [slide, setSlide] = useState(0)

  const handleNextSlide = () => {

    setSlide((slide) => slide === 5 ? slide = 0 : slide + 1)

  }
  const handlePrevSlide = () => {
    setSlide((slide) => slide === 0 ? slide = 5 : slide - 1)
  }


  return (
    <section  >
      <h3 style={{ textAlign: "start", marginLeft: "20px", marginTop: "50px" }}>{capitalizeProp}</h3>
      <div className='movieList_container' style={{ transform: `translateX(-${slide * 50}%` }}>

        {
          movies && movies.map(movie => (
            <div className='movieList_item' key={movie.id}>
              <Link to="/movie-item" onClick={() => handleMovieCard(movie.id)}>
                <img src={`${imageUrl}${movie.poster_path}`} alt=""
                  className='movie_item_img'
                />

              </Link>

             
            </div>
          ))
        }
      </div>
      <div className='slider'>

        <button onClick={handlePrevSlide} >

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" width="30px">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <button onClick={handleNextSlide}>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" width="30px">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
      <div>

      </div>
    </section>
  )
}
