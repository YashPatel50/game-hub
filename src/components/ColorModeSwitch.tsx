import { HStack, Text } from "@chakra-ui/react";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { useColorMode } from "./ui/color-mode";

const ColorModeSwitch = () => {
  //State to keep track of switch
  const [checked, setChecked] = useState(false);

  //Get the toggle from chakra
  const { toggleColorMode } = useColorMode();

  return (
    <HStack padding="10px">
      <Switch
        colorPalette="green"
        checked={checked}
        onCheckedChange={(e) => {
          setChecked(e.checked);
          toggleColorMode();
        }}
      ></Switch>
      <Text whiteSpace="nowrap">Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
