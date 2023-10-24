import {
  ButtonSpinner,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { SiSpinnaker } from "react-icons/si";
import { FaSpinner } from "react-icons/fa";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
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
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="large">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
