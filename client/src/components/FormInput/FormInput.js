import React from 'react';
import TextField from '@mui/material/TextField';

const FormInput = ({ label, type, name, value, onChange, ...rest }) => {
  return (
    <TextField
      label={label}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

export default FormInput;