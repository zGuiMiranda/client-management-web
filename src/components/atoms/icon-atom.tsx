import { As, Icon, Text } from "@chakra-ui/react";
import { ReactElement } from "react";

interface IconAtomProps {
  color?: string;
  className?: string;
  icon: any | undefined;
}

export const IconAtom = ({ className, color, icon }: IconAtomProps) => {
  return <Icon as={icon} className={className} color={color} />;
};
