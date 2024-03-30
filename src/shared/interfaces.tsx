import { UseFormReset, FieldValues } from "react-hook-form";

export interface ReactHookFormInterface {
  errors?: any;
  control?: any;
  register?: any;
  name: string;
  setValue?: any;
  getValues?: any;
  watch?: any;
  methods?: any;
}

export interface User {
  login: string;
  password: string;
}

export interface Client {
  id: string;
  name: string;
  father_name: string;
  mother_name: string;
  phone: string;
}

export interface InputControllerMoleculeProps {
  entity?: string;
  index?: any;
  isActionForm?: Boolean;
  isEdit?: boolean | undefined;
  register?: any;
  errors?: any;
  control?: any;
  setValues?: any;
  getValues?: any;
  additionalProps?: any;
  modalTitle?: any;
  watch?: any;
  methods?: any;
  isSingle?: boolean;
  customAction?: any;
  onOpenCustomFunction?: any;
  isButtonDisabled?: { message: string; isDisabled: boolean };
  isRequired?: boolean;
  isReadOnly?: boolean;
  label?: string;
  reset?: UseFormReset<FieldValues>;
}
