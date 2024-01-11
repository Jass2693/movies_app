import { useContext } from 'react'
import { useFetch } from '../../Hooks/useFetch'
import { WatchnowBtn } from '../WatchnowBtn'
import { MoviesContext } from '../../context/MoviesContext'
import { MovieCard } from './MovieCard'


export const MovieItem = () => {
    const imageUrl = "https://image.tmdb.org/t/p/w500"
    const { movieCard } = useContext(MoviesContext)
    const URL = `https://api.themoviedb.org/3/movie/${movieCard}?language=en-US`
    const { dataMovie } = useFetch(URL)
    const watchBtnClass = "movie_item_watch_btn";

 

    function setToHour(min) {
        const hours = Math.floor(min / 60);
        const restMin = min % 60
        return `${hours}hs ${restMin}min`
    }
    function setDate(date) {
       
        date = new Date(date).toDateString()
        
        const month = date.slice(4,7)
        const year = date.slice(10)
    
        
      return `${month} ${year}`
    }

    
    
    
 

    return (
    <div className='header'>
        {

            dataMovie ?
                <div className='item_container'>

                    <img src={`${imageUrl}${dataMovie.backdrop_path}`}
                            alt=""
                            className='image_mainHeader' />
                            
                    <div className='item_info_container'>



                        <span className='movie_title'
                            
                        >{dataMovie.original_title}</span>
                            
                            
                            <ul className='genres_list'>
                                {
                                   (dataMovie.lenth > 0) ? dataMovie.genres.map((genre,index) => (

                                        <li key={index}>{genre.name} </li>
                                    )) : "" 
                                } 
                             
                             </ul> 
                            


                            <div
                            className=''
                            style={{width: "160px", display: "flex", justifyContent: "space-around", fontSize: "small", marginBottom: "10px"}}
                            >
                            <span>{setDate(dataMovie.release_date)}  </span> 
                            <span> • </span>
                             <span>{setToHour(dataMovie.runtime)}</span>
                            </div>
                          

                            {/* <span>language: {dataMovie.original_language}</span> */}
                            
                            <p className='movie_overview'

                            >{dataMovie.overview}</p>
                            <div className='watch_btn_container' 
                                
                            >
                                
                                
                              {
                                movieCard ?

                                <>
                                
                                  <div>
                                     
                                     <MovieCard props={movieCard} />
                                 </div>  
                               
                                <div>

                                <WatchnowBtn 
                                    class={watchBtnClass}
                                    props={movieCard} />
                                </div>
                                </>
                                : ""

                              }


                            </div>
                        </div>
                    </div>

                    : 
                     <div style={{width: "99vw",display: "flex", justifyContent: "center", height: "400px", alignItems: "center"}}>

                       {/* <span style={{ fontSize: "25px" }}>Seleccione una pelicula</span> */}
                    <div className='spinner'></div>
                     </div>

            }
        </div>
    )
}

