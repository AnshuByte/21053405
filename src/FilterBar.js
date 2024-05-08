import React from 'react';
import { InputLabel, Select, MenuItem, FormControl, TextField } from '@mui/material';

const FilterBar = ({ onFilterChange }) => {
  // States for categories, companies, price range, etc.

  const handleFilterChange = (event) => {
    const filterName = event.target.name;
    const filterValue = event.target.value;
    onFilterChange(filterName, filterValue); 
  };

  return (
    <div style={{ padding: '20px' }}>
      <FormControl fullWidth sx={{ margin: '10px' }}>
        <InputLabel>Category</InputLabel>
        <Select name="category" onChange={handleFilterChange}>
          {/* Populate menu items dynamically */}
        </Select>
      </FormControl>
      {/* Similar controls for Company, Price Range*/}
    </div>
  );
};

export default FilterBar;
