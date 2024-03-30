import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import InputMask from "react-input-mask";
import { Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { useEntityContext } from "@/contexts/entity-context";
import { InputControllerMoleculeProps } from "../../shared/interfaces";

interface TextInputMoleculeProps extends InputControllerMoleculeProps {
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
}

export const TextInputMolecule = ({
  name,
  text = "",
  color,
  size,
  type = "text",
  mask = null,
  borderRadius = 5,
  variant = "outline",
  innerPadding = "5px",
  errors,
  control,
  isReadOnly,
  isRequired,
  placeholder,
}: TextInputMoleculeProps) => {
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
      {mask ? (
        <FormControl isRequired isInvalid={errors[name]}>
          <FormLabel>{text}</FormLabel>
          <Controller
            control={control}
            name={name}
            defaultValue={value}
            rules={{ required: !isReadOnly ? isRequired : false }}
            render={({ field: { ref, onChange, ...restField } }) => (
              <Input
                {...restField}
                ref={ref}
                as={InputMask}
                borderRadius={borderRadius}
                color={color}
                type={type}
                size={size}
                mask={mask}
                name={name}
                key={name}
                placeholder={placeholder}
                _placeholder={{ padding: "1", paddingLeft: "2px" }}
                onChange={({ target }) => onChangeValue(onChange, target.value)}
                variant={variant}
              />
            )}
          />
        </FormControl>
      ) : (
        <FormControl
          isRequired={text?.trim() !== "" && isRequired === true}
          isInvalid={errors[name]}
        >
          <FormLabel>{text}</FormLabel>
          <Controller
            control={control}
            name={name}
            rules={{ required: !isReadOnly ? isRequired : false }}
            defaultValue={value}
            render={({ field: { ref, value, onChange, ...restField } }) => (
              <Input
                {...restField}
                value={value}
                ref={ref}
                borderRadius={borderRadius}
                placeholder={placeholder}
                _placeholder={{ padding: innerPadding }}
                variant={variant}
                size={size}
                type={type}
                name={name}
                color={color}
                onChange={({ target }) => onChangeValue(onChange, target.value)}
              />
            )}
          />
        </FormControl>
      )}
    </>
  );
};
