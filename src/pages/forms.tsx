// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FunctionComponent } from "react";

import { Box, Container, Stack, Typography } from "@mui/material";

import FormField from "../components/forms/form-field";
import TextField from "../components/forms/text-field";

const Forms: FunctionComponent = () => {
  return (
    <Container>
      <Box>
        <Typography component="h1">Forms</Typography>
      </Box>
      <Box component="form">
        <Stack spacing={2}>
          <FormField
            errorMessage="This field is required"
            field={<TextField />}
            helperText="This is a standard text field."
            label="Field"
          ></FormField>
          <FormField
            errorMessage="This field is required"
            helperText="This is a standard text field."
            label="Field"
          ></FormField>
          <FormField>
            <TextField />
          </FormField>
        </Stack>
      </Box>
    </Container>
  );
};

export default Forms;
