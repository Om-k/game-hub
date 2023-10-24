import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import allGames from "../assets/All-Games.jpeg";

interface Props {
  onSelectedGenre: (genre: Genre | null) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  {
    /* Mycode start */
  }
  const tempGenre = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  if (isLoading)
    return (
      <>
        <List>
          {tempGenre.map((genre) => (
            <ListItem key={genre} paddingY="5px">
              <HStack>
                <Skeleton boxSize="32px" />
                <Skeleton height="10px" width="100px" />
              </HStack>
            </ListItem>
          ))}
        </List>
      </>
    );

  return (
    <List>
      <ListItem key={0} paddingY="5px">
        <HStack>
          <Image src={allGames} boxSize="32px" borderRadius={8} />

          <Button
            fontSize="large"
            variant="link"
            onClick={() => onSelectedGenre(null)}
            fontWeight={selectedGenre ? "normal" : "bold"}
          >
            All
          </Button>
        </HStack>
      </ListItem>
      {/* Mycode end */}

      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              fontSize="large"
              variant="link"
              onClick={() => onSelectedGenre(genre)}
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
