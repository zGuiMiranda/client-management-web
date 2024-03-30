import { Heading } from "@chakra-ui/react";
import { TextAtom } from "../atoms/text-atom";

interface HeadingMoleculeProps {
  size?: string;
  text: string;
}

export const HeadingMolecule = ({ size, text }: HeadingMoleculeProps) => {
  return (
    <>
      <Heading>
        <TextAtom text={text} />
      </Heading>
    </>
  );
};
