
import { GenreList } from './GenreList'


export const MoviesList = () => {
  
  return (
    <div >
    

      <GenreList props={"popular"} />
      <GenreList props={"now_playing"} />
      <GenreList props={"top_rated"} />
      <GenreList props={"upcoming"} />

    </div>



  )
}
