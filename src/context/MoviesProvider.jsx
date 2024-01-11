    import { useState } from "react"
import { MoviesContext } from "./MoviesContext"



    export const MoviesProvider = ({children}) => {
        const [filterMovies, setFilterMovies] = useState("")
        const [movieCard, setMovieCard] = useState(false)
        const [searchMovie,setSearchMovie] = useState("")
        const [toggleMenu, settoggleMenu] = useState(false)
     

        const handleMovieCard = (movie) => {
            setMovieCard(movie)
           
           
           }
        return (

        <MoviesContext.Provider
        value={{
         filterMovies,
         setFilterMovies,
         movieCard,
         setMovieCard,
         handleMovieCard,
         searchMovie,setSearchMovie,
         toggleMenu, settoggleMenu,
     
         
        }}>
        {children}
    </MoviesContext.Provider>
        )
    }