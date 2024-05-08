import React, { useState, useEffect } from 'react';
import { Grid, Box } from '@mui/material';
import ProductCard from '../components/ProductCard'; 
import Filters from '../components/Filters';
import Pagination from '../components/Pagination';
import { fetchProducts } from '../api/api';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({}); // State to manage filters

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchProducts(filters);
      setProducts(result);
    }
    fetchData();
  }, [filters]);

  return (
    <Box>
      <Filters onFilterChange={setFilters} /> 
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}> 
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <Pagination /> 
    </Box>
  );
};

export default ProductsPage;
