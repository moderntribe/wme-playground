import React, { FunctionComponent } from "react";
import { styled, FormHelperText, FormHelperTextProps } from "@mui/material";

const StyledFormHelperText = styled(FormHelperText, {
  name: "WmeFormHelperText",
  slot: "Root",
})(({ theme }) => ({
  fontSize: 10,
  marginLeft: 0,
}));

const HelperText: FunctionComponent<FormHelperTextProps> = ({
  children,
  ...props
}) => {
  return <StyledFormHelperText {...props}>{children}</StyledFormHelperText>;
};

export default HelperText;
