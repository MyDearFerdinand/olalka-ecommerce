import React from 'react';
import { Button as MuiButton } from '@mui/material';
import './Button.module.css';

const Button = ({ children, onClick, ...rest }) => {
  return (
    <MuiButton onClick={onClick} {...rest}>
      {children}
    </MuiButton>
  );
};

export default Button;