
import { useFetch } from '../Hooks/useFetch'
// todo: hacer que reciba una prop que le diga donde posicionarse
export const WatchnowBtn = ({props,watchBtnClass}) => {
    const URL = `https://api.themoviedb.org/3/movie/${props}/videos?language=en-US`;
    const {movies} = useFetch(URL)
    


  return (
   <div className={watchBtnClass ? watchBtnClass : ""}>
   {
    (movies.length > 0)  ? 
    <a 
        href={`https://www.youtube.com/watch?v=${movies[0].key}`}
        className='header_buttons' 
        target='_blank'
    >Watch Now</a>
   
    : ""
   } 
   </div>
  )
}
