import useData from "./useData";
import { Genre } from "./useGenres";

//interface for Platform
export interface Platform {
  id: number
  name: string
  slug: string
}


//interface to define a game from api request
export interface Game {
    id: number;
    name: string;
    background_image: string
    parent_platforms: {platform: Platform}[]
    metacritic: number
  }
  
const useGames = (selectedGenre: Genre | null) => useData<Game>('/games', {params: {genres: selectedGenre?.id}}, [selectedGenre?.id,])

export default useGames