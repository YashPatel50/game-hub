import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, List, Image, Spinner, Heading } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner size="xl"></Spinner>;

  return (
    <>
      <Heading size="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List.Root variant="plain">
        {data.map((genre) => (
          <List.Item key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Button
                variant={"ghost"}
                whiteSpace="normal"
                fontSize="lg"
                textAlign="left"
                flex={1}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => {
                  onSelectGenre(genre);
                }}
              >
                {genre.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
