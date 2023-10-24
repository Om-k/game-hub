import {
  Button,
  CloseButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <InputRightElement
          children={<CloseButton />}
          onClick={() => setInputValue("")}
        />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games"
          variant="filled"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        ;
      </InputGroup>
    </form>
  );
};

export default SearchInput;
