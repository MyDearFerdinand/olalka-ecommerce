import React, { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Grid } from "@mui/material";
import "./Products.module.css";

const Products = () => {
  // Replace with data fetched from your API
  const allProducts = [
    {
      id: 1,
      title: "Product 1",
      imageUrl: "https://via.placeholder.com/150",
      price: 49.99,
    },
    {
      id: 2,
      title: "Product 2",
      imageUrl: "https://via.placeholder.com/150",
      price: 49.99,
    },
    {
      id: 3,
      title: "Product 3",
      imageUrl: "https://via.placeholder.com/150",
      price: 49.99,
    },
    {
      id: 4,
      title: "Product 1",
      imageUrl: "https://via.placeholder.com/150",
      price: 49.99,
    },
    {
      id: 5,
      title: "Product 2",
      imageUrl: "https://via.placeholder.com/150",
      price: 49.99,
    },
    {
      id: 6,
      title: "Product 3",
      imageUrl: "https://via.placeholder.com/150",
      price: 49.99,
    },
    {
      id: 7,
      title: "Product 1",
      imageUrl: "https://via.placeholder.com/150",
      price: 49.99,
    },
    {
      id: 8,
      title: "Product 2",
      imageUrl: "https://via.placeholder.com/150",
      price: 49.99,
    },
    {
      id: 9,
      title: "Product 3",
      imageUrl: "https://via.placeholder.com/150",
      price: 49.99,
    },
    // Add more products
  ];

  const [products, setProducts] = useState(allProducts);

  return (
    <div>
      <h1>Products</h1>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
