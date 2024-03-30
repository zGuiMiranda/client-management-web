import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@chakra-ui/react";
import { HeadingMolecule } from "./heading-molecule";
import { ReactElement, ReactNode } from "react";

interface CardMoleculeProps {
  children: ReactElement;
  footer: ReactElement;
  footerAlignmentStyle?: "end" | "flex-end" | "space-between";
  text: string;
}

export const CardMolecule = ({
  children,
  footer,
  footerAlignmentStyle = "flex-end",
  text,
}: CardMoleculeProps) => {
  return (
    <>
      <Card maxW="sm">
        <CardHeader>
          <HeadingMolecule size="sm" text={text} />
        </CardHeader>
        <CardBody>{children}</CardBody>
        {footer && <Divider mt={5} color={"gray"} />}
        <CardFooter justify={footerAlignmentStyle}>{footer}</CardFooter>
      </Card>
    </>
  );
};
