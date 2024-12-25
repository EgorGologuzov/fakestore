import React from 'react'
import { useCart } from '../hooks/useCart'
import { Button, IconButton, Stack, Typography } from '@mui/material';
import { Remove, Add, ShoppingCartCheckout } from '@mui/icons-material';

export default function ToCartButton({ goodId }) {
  const { goods, addGood, removeGood, openCart } = useCart();
  const quantity = goods[goodId];

  return quantity
    ?
    <Stack direction="row" justifyContent="space-between" alignContent="center" sx={{width: "100%"}}>
      <IconButton color="inherit" onClick={openCart}><ShoppingCartCheckout /></IconButton>
      <IconButton color="inherit" onClick={() => removeGood({ id: goodId })}><Remove /></IconButton>
      <Typography color="primary" variant="h6" component="span">
        {quantity === undefined ? "0" : quantity}
      </Typography>
      <IconButton color="inherit" onClick={() => addGood({ id: goodId })}><Add /></IconButton>
    </Stack>
    :
    <Button variant="contained" onClick={() => addGood({ id: goodId })} sx={{width: "100%"}}>В корзину</Button>
}
