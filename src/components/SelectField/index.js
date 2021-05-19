import React from 'react';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@material-ui/core';

const SelectField = ({ field, initialValue, form, options, ...rest }) => (
  <FormControl variant="filled" error={form?.touched[field.name] && !!form?.errors[field.name]}>
    <InputLabel>{rest.label}</InputLabel>
    <Select {...field}>
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {options.map(x => (
        <MenuItem key={x.value} value={x.value}>
          {x.text}
        </MenuItem>
      ))}
    </Select>
    <FormHelperText>
      <span>{form?.touched[field.name]}</span>
    </FormHelperText>
  </FormControl>
);

export default SelectField;
