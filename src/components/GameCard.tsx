import React from "react";
import { Game } from "@/hooks/useGames";
import { Card, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root key={game.id} borderRadius={10} overflow="hidden">
      <Image src={game.background_image}></Image>
      <Card.Header fontSize={"2xl"}>{game.name}</Card.Header>
    </Card.Root>
  );
};

export default GameCard;
