import React from 'react';
import { TextField } from '@material-ui/core';
import './styles.scss';

const TextInput = ({ field, initialValue, form, ...rest }) => (
  <TextField
    variant="outlined"
    error={form?.touched[field.name] && !!form?.errors[field.name]}
    helperText={form?.touched[field.name] && form?.errors[field.name]}
    {...field}
    {...rest}
  />
);

export default TextInput;
