import { Game } from "@/hooks/useGames";
import { Card, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root key={game.id}>
      {/*Set the background image*/}
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <Card.Body paddingTop={3} paddingBottom={0}>
        <HStack justifyContent={"space-between"}>
          {/*Get the available platforms for each game*/}
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
      <Card.Header fontSize={"2xl"} marginBottom={3} paddingTop={0}>
        {game.name}
        <Emoji rating={game.rating_top}></Emoji>
      </Card.Header>
    </Card.Root>
  );
};

export default GameCard;
