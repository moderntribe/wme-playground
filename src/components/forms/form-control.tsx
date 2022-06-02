import React, { FunctionComponent } from "react";
import { FormControlUnstyled, FormControlUnstyledProps } from "@mui/base";

const FormControl: FunctionComponent<FormControlUnstyledProps> = ({
  children,
  ...props
}) => {
  return <FormControlUnstyled {...props}>{children}</FormControlUnstyled>;
};

export default FormControl;
