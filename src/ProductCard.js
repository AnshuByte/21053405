import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}  // Placeholder image
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {product.name}
        </Typography>
        {/* ...other details: price, rating, etc. */}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
