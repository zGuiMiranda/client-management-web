import { Button } from "@chakra-ui/react";
import { TextAtom } from "../atoms/text-atom";

interface ButtonMoleculeProps {
  name: string;
  textColor?: string;
  type?: "button" | "submit" | "reset" | undefined;
  size?: string;
  text: string;
  buttonColor?: string;
  variant?: "solid" | "outline" | "ghost" | "link";
  formName?: string;
  width?: string;
  h?: string;
  mr?: string;
  onClick?: (data: unknown) => void;
}

export const ButtonMolecule = ({
  name,
  text,
  textColor = "white",
  size,
  buttonColor = "green",
  type = "submit",
  variant = "solid",
  formName,
  width,
  h,
  mr,
  onClick,
}: ButtonMoleculeProps) => {
  return (
    <>
      <Button
        form={formName}
        variant={variant}
        color={textColor}
        colorScheme={buttonColor}
        size={size}
        type={type}
        name={name}
        width={width}
        h={h}
        marginRight={mr}
        onClick={onClick}
      >
        <TextAtom text={text} />
      </Button>
    </>
  );
};
