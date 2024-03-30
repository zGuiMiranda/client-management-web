import React from "react";
import { FormProvider, useForm } from "react-hook-form";

interface FormOrganismProps {
  onSubmit: (data: Object) => void;
  id?: string;
  children: React.ReactNode;
}
export const FormMolecule: React.FC<FormOrganismProps> = ({
  children,
  onSubmit,
  id,
}) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => {
          e.stopPropagation();
          return methods.handleSubmit(onSubmit)(e);
        }}
        id={id}
      >
        {React.Children.map(children, (child: any) => {
          return (
            child?.$$typeof &&
            React.createElement(child.type, {
              ...{
                ...child?.props,
                //register: methods.register,
                errors: methods.formState.errors,
                control: methods.control,
                // setValue: methods.setValue,
                // getValues: methods.getValues,
                // watch: methods.watch,
                methods: methods,
                reset: methods.reset,
                // resetField: methods.resetField,
                // formState: methods.formState,
              },
            })
          );
        })}
      </form>
    </FormProvider>
  );
};
