import React, { FunctionComponent, PropsWithChildren } from "react";
import { styled, InputLabel } from "@mui/material";

type LabelProps = {
  htmlFor: string;
};

const StyledLabel = styled(InputLabel, {
  name: "WmeInputLabel",
  slot: "Root",
})(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: 14,
  fontWeight: "600",
  marginBottom: 5,
  textAlign: "left",
}));

const Label: FunctionComponent<PropsWithChildren<LabelProps>> = ({
  children,
  ...props
}) => {
  return <StyledLabel {...props}>{children}</StyledLabel>;
};

export default Label;
