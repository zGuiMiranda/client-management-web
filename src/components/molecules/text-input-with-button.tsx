import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import InputMask from "react-input-mask";
import { Controller } from "react-hook-form";
import { ReactElement, useState } from "react";
import { useEntityContext } from "@/contexts/entity-context";
import { InputControllerMoleculeProps } from "../../shared/interfaces";
import { ButtonMolecule } from "./button-molecule";

interface TextInputWithButtonMoleculeProps
  extends InputControllerMoleculeProps {
  name: string;
  color?: string;
  type?: string;
  size: string;
  text?: string;
  mask?: string | null;
  borderRadius?: number;
  variant?: "outline" | "unstyled" | "flushed" | "filled";
  innerPadding?: string;
  placeholder?: string;
  leftElement?: ReactElement;
  rightElement?: ReactElement;
}

export const TextInputWithButtonMolecule = ({
  name,
  text = "",
  color,
  size,
  type = "text",
  borderRadius = 5,
  variant = "outline",
  innerPadding = "5px",
  errors,
  control,
  isReadOnly,
  isRequired,
  placeholder,
  leftElement,
  rightElement,
  mask,
}: TextInputWithButtonMoleculeProps) => {
  const { state } = useEntityContext();
  const [value, setValue] = useState<string>(state?.entity?.[name]);

  const onChangeValue = (
    controllerOnChange: (...event: any[]) => void,
    value: string
  ) => {
    controllerOnChange(value);
    setValue(value);
  };

  return (
    <>
      <FormControl
        isRequired={text?.trim() !== "" && isRequired === true}
        isInvalid={errors[name]}
      >
        <FormLabel>{text}</FormLabel>
        <Controller
          control={control}
          name={name}
          rules={{
            required: !isReadOnly ? isRequired : false,
          }}
          defaultValue={value}
          render={({ field: { ref, value, onChange, ...restField } }) => (
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                {leftElement}
              </InputLeftElement>
              <Input
                {...restField}
                value={value}
                //ref={ref}
                borderRadius={borderRadius}
                placeholder={placeholder}
                _placeholder={{ padding: innerPadding }}
                variant={variant}
                size={size}
                type={type}
                name={name}
                color={color}
                as={InputMask}
                mask={mask || ""}
                onChange={({ target }) => onChangeValue(onChange, target.value)}
              />
              <InputRightElement width="4.5rem">
                {rightElement}
              </InputRightElement>
            </InputGroup>
          )}
        />
      </FormControl>
    </>
  );
};
