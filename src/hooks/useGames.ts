import { GameQuery } from "@/App";
import useData from "./useData";

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
  
const useGames = (gameQuery: GameQuery) =>
   useData<Game>('/games', 
    {params: {  genres: gameQuery.genre?.id,
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText}},
    [gameQuery])

export default useGames