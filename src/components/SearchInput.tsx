import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup flex="1" startElement={<BsSearch></BsSearch>}>
      <Input
        placeholder="Search Games"
        borderRadius={20}
        variant="subtle"
      ></Input>
    </InputGroup>
  );
};

export default SearchInput;
