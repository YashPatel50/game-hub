import { Platform } from "@/hooks/useGames";
import { HStack } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { SiSega } from "react-icons/si";
import { SiApplearcade } from "react-icons/si";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  //Map to take string to IconType
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: BsGlobe,
    sega: SiSega,
    atari: SiNintendo,
    "commodore-amiga": FaWindows,
    "3do": SiNintendo,
    "neo-geo": SiApplearcade,
  };

  //Get the icon for each platform
  //Modified so that IconType is able to work!!!!!
  return (
    <HStack marginY={"10px"}>
      {platforms.map((platform) => {
        const Icon = iconMap[platform.slug];
        return <Icon key={platform.slug} color="#71717a"></Icon>;
      })}
    </HStack>
  );
};

export default PlatformIconList;
