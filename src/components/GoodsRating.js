import { Rating, Stack, Typography } from '@mui/material'
import React from 'react'

const valueTo5StarsSystem = (value) => {
  value ??= 15;
  value %= 20;
  value = value > 5 ? value / 4 : value;
  value = value < 3 ? (value + 2) / 1.1 : value / 1.1;
  value = value < 3 ? (value + 2) / 1.1 : value / 1.1;
  return value;
}

const valueToReviewsQuantity = (value) => {
  return value ? value * 50 + value : 14;
}

export default function GoodsRating({ value }) {
  const validValue = valueTo5StarsSystem(value);
  const reviewsQuantity = valueToReviewsQuantity(value);

  return (
    <Stack direction="row" alignItems="center">
      <Rating
          name="product-rating"
          value={validValue}
          precision={0.1}
          readOnly
      />
      <Typography variant="body2" sx={{ color: 'text.secondary', ml: "5px" }}>
          {`${validValue.toFixed(1)} (${reviewsQuantity})`}
      </Typography>
    </Stack>
  )
}
