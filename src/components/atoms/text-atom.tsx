import { Text } from "@chakra-ui/react";

interface TextAtomProps {
  text?: string;
  color?: string;
  fontSize?: string;
  className?: string;
}

export const TextAtom = ({
  className,
  text,
  color,
  fontSize,
}: TextAtomProps) => {
  return (
    <Text className={className} color={color} fontSize={fontSize}>
      {text}
    </Text>
  );
};
