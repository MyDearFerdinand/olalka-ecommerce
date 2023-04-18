import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
// import './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const { title, imageUrl, price } = product;

  return (
    <Card>
      <CardMedia image={imageUrl} title={title} />
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">${price}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;