import React from "react";
import { Game } from "@/hooks/useGames";
import { Card, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root key={game.id} borderRadius={10} overflow="hidden">
      {/*Set the background image*/}
      <Image src={game.background_image}></Image>
      <Card.Header fontSize={"2xl"}>{game.name}</Card.Header>
      <Card.Body>
        <HStack justifyContent={"space-between"}>
          {/*Get the available platforms for each game*/}
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
