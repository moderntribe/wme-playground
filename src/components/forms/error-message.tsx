import React, { FunctionComponent } from "react";
import { useFormControlUnstyledContext } from "@mui/base";
import { styled, Typography, TypographyProps } from "@mui/material";

const StyledError = styled(Typography, {
  name: "WmeError",
  slot: "Root",
})(({ theme }) => ({
  color: theme.palette.error.main,
  fontSize: 10,
  marginTop: 8,
}));

const ErrorMessage: FunctionComponent<TypographyProps> = ({
  children,
  ...props
}) => {
  const formControlContext = useFormControlUnstyledContext();

  if (formControlContext?.error) {
    return <StyledError {...props}>{children}</StyledError>;
  }

  return null;
};

export default ErrorMessage;
