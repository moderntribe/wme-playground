import React, { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import { FormControlUnstyledProps } from "@mui/base";

import ErrorMessage from "./error-message";
import FormControl from "./form-control";
import HelperText from "./helper-text";
import Label from "./label";

type FormFieldProps = FormControlUnstyledProps & {
  errorMessage?: string;
  field?: ReactNode;
  helperText?: string;
  id?: string;
  label?: string;
};

const FormField: FunctionComponent<PropsWithChildren<FormFieldProps>> = ({
  children,
  errorMessage,
  field,
  helperText,
  id,
  label,
  ...props
}) => {
  return (
    <FormControl { ...props }>
      { label && <Label htmlFor={id || ""}>{ label }</Label> }
      { field }
      { errorMessage && <ErrorMessage>{ errorMessage }</ErrorMessage> }
      { helperText && <HelperText>{ helperText }</HelperText> }
      { children }
    </FormControl>
  );
};

export default FormField;
