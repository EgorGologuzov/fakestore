import React, { useEffect, useState } from 'react'
import { getProductById } from '../data/api';
import { Alert, Box, CircularProgress, IconButton, Stack, styled, Typography } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import { useCart } from '../hooks/useCart';

const ClampedTypography = styled(Typography)(({ theme }) => ({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  WebkitLineClamp: 2,
  textOverflow: 'ellipsis',
  margin: 0,
}));

export default function GoodInCart({ goodId, onPriceLoad }) {
  const [good, setGood] = useState();
  const [isBusy, setIsBusy] = useState(false);
  const { goods, addGood, removeGood } = useCart();
  const quantity = goods[goodId];

  const load = async () => {
    setIsBusy(true);
    try {
      const result = await getProductById({ id: goodId });
      setGood(result);
      result && onPriceLoad && onPriceLoad({ price: result.price });
    } finally {
      setIsBusy(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <Stack direction="row" justifyContent="center" spacing={1} sx={{ borderBottom: "1px solid", borderBottomColor: "text.disabled" }}>

      {isBusy && <CircularProgress />}

      {!isBusy && !good && <Alert severity="error">Ошибка загрузки</Alert>}

      {!isBusy && good &&
        <>
          <Box component="img" src={good.image} sx={{ maxWidth: 100, objectFit: "contain" }} />
          <Stack direction="column" spacing={1}>
            <Typography gutterBottom variant="h6" component="div" color="primary">
              {"$" + good.price.toLocaleString()}
            </Typography>
            <ClampedTypography gutterBottom variant="subtitle2" component="div">
              {good.title}
            </ClampedTypography>
            <Stack direction="row" spacing={1}>
              <IconButton color="inherit" onClick={() => removeGood({ id: goodId })}><Remove /></IconButton>
              <Typography color="primary" variant="h6" component="div" sx={{ minWidth: "50px", textAlign: "center" }}>
                {quantity === undefined ? "0" : quantity}
              </Typography>
              <IconButton color="inherit" onClick={() => addGood({ id: goodId })}><Add /></IconButton>
            </Stack>
          </Stack>
        </>
      }

    </Stack>
  )
}
