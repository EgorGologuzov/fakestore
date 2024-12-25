import { Rating, Typography } from '@mui/material'
import React from 'react'

export default function GoodsRating({ value }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Rating
          name="product-rating"
          value={value}
          precision={0.1}
          readOnly
      />
      <Typography variant="body1" style={{ marginLeft: 10 }}>
          {value.toFixed(1).toLocaleString()}
      </Typography>
    </div>
  )
}
