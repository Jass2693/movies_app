import React, { useEffect } from 'react'
import { useFetch } from '../../Hooks/useFetch'

export const MovieCard = ({props}) => {
    const URL = `https://api.themoviedb.org/3/movie/${props}/credits?language=en-US`
    const {dataMovie} = useFetch(URL)
    
   useEffect(() => {
    
   }, [dataMovie])
   
 
  return (
    <div>
        {
            (dataMovie && dataMovie.crew.length > 2 && dataMovie.cast.length > 2)  ?
            <div>
             <span style={{fontWeight: "bolder",color: "#edd6dd",marginRight: "4px"}}>Directed:</span> <span style={{fontWeight: "400", color: "#eff6ff", fontFamily: "Roboto"}}> {dataMovie.crew[0].name} • {dataMovie.crew[1].name} •  {dataMovie.crew[2].name}</span>  
              <br />
             <span style={{fontWeight: "bolder" ,color: "#edd6dd",marginRight: "4px"}}>Starring:</span> <span style={{fontWeight: "400" , color: "#eff6ff", fontFamily: "Roboto"}}> {dataMovie.cast[0].name} • {dataMovie.cast[1].name} • {dataMovie.cast[2].name}</span> 
            </div>
            : <span>No se encontro mas informacion sobre la pelicula</span>
        }
    </div>
  )
}
