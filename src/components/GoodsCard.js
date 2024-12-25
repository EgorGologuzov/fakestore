import { Box, Button, Card, CardActions, CardContent, CardMedia, Link, Stack, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import GoodsRating from './GoodsRating'
import ToCartButton from './ToCartButton'
import GoodsDialog from './GoodsDialog';

const ClampedTypography = styled(Typography)(({ theme }) => ({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  WebkitLineClamp: 2,
  textOverflow: 'ellipsis',
  margin: 0,
}));

const discountToRating = (discount) => {
  discount ??= 17;
  discount %= 20;
  return discount / 4;
}

export default function GoodsCard({ data }) {
  const [isOpenInfo, setIsOpenInfo] = useState(false);

  const show = () => setIsOpenInfo(true);
  const hide = () => setIsOpenInfo(false);

  return (
    <Card sx={{ minHeight: "500px", maxHeight: "500px", display: "flex", flexDirection: "column"}} >
      <Box sx={{ position: "relative", height: "300px" }} onClick={show}>
        <CardMedia component="img" height="300" alt={data.title} image={data.image}
          sx={{ position: "absolute", objectFit: "cover", filter: "blur(10px)", overflow: "hidden" }} />
        <CardMedia component="img" height="300" alt={data.title} image={data.image}
          sx={{ position: "absolute", objectFit: "contain" }} />
      </Box>

      <CardContent onClick={show}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" flexWrap="wrap">
          <GoodsRating value={discountToRating(data.discount)} />
          <Typography gutterBottom variant="h6" component="div" sx={{margin: 0}} color="primary">
            {"$" + data.price.toLocaleString()}
          </Typography>
        </Stack>
        <ClampedTypography gutterBottom variant="h6" component="div">
          {data.title}
        </ClampedTypography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {"#" + data.category}
        </Typography>
      </CardContent>

      <CardActions sx={{mt: "auto", width: "100%"}}>
        <ToCartButton goodId={data.id} />
      </CardActions>

      <GoodsDialog good={data} open={isOpenInfo} onClose={hide} />

    </Card>
  )
}
