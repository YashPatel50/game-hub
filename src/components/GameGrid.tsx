import React, { useEffect, useState } from "react";
import apiClient from "@/services/api-client";
import { Text } from "@chakra-ui/react";

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

console.log(import.meta.env);
const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGameResponse>("/games")
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
