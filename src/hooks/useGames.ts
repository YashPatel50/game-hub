import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

//interface to define a game from api request
interface Game {
    id: number;
    name: string;
  }
  
  //Interface to define the object returned from the api request
  interface FetchGameResponse {
    count: number;
    results: Game[];
  }


const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {

        const controller = new AbortController();
      apiClient
        .get<FetchGameResponse>("/games", {signal: controller.signal})
        .then((res) => {
          setGames(res.data.results);
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message)
        });

        return () => controller.abort()
    }, []);

    return {games, error}

}

export default useGames