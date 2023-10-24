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
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectedGenre: (genre: Genre | null) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;

  /* Mycode start */
  if (isLoading) return <GenreListSkeleton />;

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
      {/*  Mycode end */}

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
