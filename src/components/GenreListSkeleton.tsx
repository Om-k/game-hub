import React from "react";
import { Genre } from "../hooks/useGenres";
import { HStack, List, ListItem, Skeleton } from "@chakra-ui/react";

const tempGenre = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const GenreListSkeleton = () => {
  return (
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
  );
};

export default GenreListSkeleton;
