import { Box, Chip } from '@mui/material';
import React, { useState } from 'react'

const categories = ["Все", "tv", "audio", "laptop", "mobile", "gaming", "appliances"];

export default function CategorySelect({ onChange }) {
  const [selectedCategory, setSelectedCategory] = useState("Все");

  const handleSelect = (category) => {
    if (category === selectedCategory) {
      return;
    }

    setSelectedCategory(category);
    onChange && onChange({ newValue: category });
  };

  return (
    <Box>
      {categories.map((category) => (
        <Chip
          key={category}
          label={category}
          onClick={() => handleSelect(category)}
          color={selectedCategory === category ? 'primary' : 'default'}
          variant={selectedCategory === category ? 'filled' : 'outlined'}
          sx={{ margin: '5px' }}
        />
      ))}
    </Box>
  );
}
