import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedSortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, selectedSortOrder }: Props) => {
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-release", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currSortOrder = sortOrder.find(
    (order) => order.value === selectedSortOrder
  );

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="solid">
          Order by: {currSortOrder?.label || "Relevance"}
          <BsChevronDown></BsChevronDown>
        </Button>
      </MenuTrigger>
      <MenuContent>
        {sortOrder.map((order) => (
          <MenuItem
            value={order.label}
            key={order.label}
            onClick={() => onSelectSortOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
