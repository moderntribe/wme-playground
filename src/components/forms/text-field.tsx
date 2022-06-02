import React, { FunctionComponent } from "react";
import { styled, InputBase } from "@mui/material";

const StyledTextField = styled(InputBase, {
  name: "WmeTextInput",
  slot: "Root",
})(({ theme }) => ({
  "&.MuiInputBase-root": {
    "& .MuiInputAdornment-root": {
      position: "absolute",
      right: 15,
    },
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    border: `1px solid ${theme.palette.text.disabled}`,
    width: "415px",
    padding: "5px 6px",
    paddingRight: "35px",
    "&:focus": {
      borderColor: theme.palette.text.primary,
    },
  },
  "&.Mui-error": {
    color: theme.palette.error.main,
    "& .MuiInputBase-input": {
      borderColor: theme.palette.error.main,
    },
    "& .MuiInputAdornment-root": {
      "& .MuiSvgIcon-root": {
        color: theme.palette.error.main,
      },
    },
  },
}));

const TextField: FunctionComponent = (props) => {
  return <StyledTextField {...props} />;
};

export default TextField;
