import { Grid2 } from '@mui/material'
import React from 'react'
import GoodsCard from './GoodsCard'

export default function GoodsList({ items }) {
  return (
    <Grid2 container spacing={2}>
      {items.map((product, _) => 
        <Grid2 key={product.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <GoodsCard data={product} />
        </Grid2>
      )}
    </Grid2>
  )
}
