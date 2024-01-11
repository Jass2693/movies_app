import { useContext } from 'react'
import { useFetch } from '../../Hooks/useFetch'
import { Link } from 'react-router-dom'
import { WatchnowBtn } from '../WatchnowBtn'
import { MoviesContext } from '../../context/MoviesContext'
import { useEffect } from 'react'

export const Header = () => {
    const URL = "https://api.themoviedb.org/3/movie/popular?api_key=1ba4e71d287254ba9167f332d45021e0"
    // const imageUrl = "https://image.tmdb.org/t/p/w500"
    const { movies } = useFetch(URL)
    const { handleMovieCard } = useContext(MoviesContext)



    return (


        <header className='header'>


            {
                (movies.length > 0) ?
                    <div className='container_main_header'>
                        <img
                            className='image_mainHeader'
                            src={`https://image.tmdb.org/t/p/w500${movies[0].backdrop_path}`} alt={movies[0].title} />
                        <div className='description_movie_header'>
                            <span className='movie_title'
                            >{movies[0].title}</span>

                            {/* style={{textAlign: "start", fontWeight: "bold"}}               */}
                            <p className='movie_overview'>{movies[0].overview}</p>

                            <div className='header_buttons_container'>

                                <WatchnowBtn props={movies[0].id}
                                    className='header_buttons' />

                                <Link to="/movie-item" onClick={() => handleMovieCard(movies[0].id)}
                                    className='header_buttons'>More Info </Link>

                            </div>
                        </div>

                    </div> : <div style={{ fontSize: "25px", textAlign: "center", marginTop: "25px" }}>
                        <div className='spinner'></div>
                    </div>
            }




        </header>




    )
}
