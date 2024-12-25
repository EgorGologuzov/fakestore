import { AppBar, Box, Chip, Container, Dialog, DialogContent, IconButton, Slide, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import ToCartButton from './ToCartButton'
import { Close } from '@mui/icons-material'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PropertyRow = ({ name, value }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{ borderBottom: "1px solid", borderBottomColor: "text.disabled" }}>
      <Typography variant="subtitle2" component="div">{name}</Typography>
      <Typography variant="body2" component="div" sx={{ ml: "1rem", textAlign: "right" }}>{value}</Typography>
    </Stack>
  )
}

export default function GoodsDialog({ good, onClose, ...otherProps }) {
  return (
    <Dialog fullScreen TransitionComponent={Transition} {...otherProps}>
      <AppBar sx={{ position: "relative" }}>
        <Container sx={{ pr: { xs: 0, sm: 0, md: 0, lg: 0, xl: 0 } }}>
          <Toolbar>
            <Typography sx={{ flexGrow: 1 }} variant="h6" component="div">
              Карточка товара
            </Typography>
            <IconButton color="inherit" onClick={onClose}><Close /></IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <DialogContent>
        <Stack direction="column" spacing={1} sx={{ maxWidth: 400, margin: "auto" }}>

          <Box component="img" src={good.image} sx={{ maxHeight: 400, objectFit: "contain" }} />

          <Stack direction="row" spacing={1}>
            {good.popular && <Chip color="primary" label="Популярный" />}
            {good.onSale && <Chip color="secondary" label="По скидке" />}
          </Stack>

          <Typography variant={"h6"} component="div">
            {good.title}
          </Typography>

          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {"#" + good.category}
            </Typography>
            <Typography gutterBottom variant="h6" component="div" color="primary">
              {"$" + good.price.toLocaleString()}
            </Typography>
          </Stack>

          <ToCartButton goodId={good.id} />

          <Typography variant="subtitle2" component="div">Описание</Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {good.description}
          </Typography>

          <Typography variant="subtitle2" component="div">Характеристики</Typography>

          <Stack direction="column">
            {good.brand && <PropertyRow name="Бренд" value={good.brand} />}
            {good.model && <PropertyRow name="Модель" value={good.model} />}
            {good.color && <PropertyRow name="Цвет" value={good.color} />}
          </Stack>

        </Stack>
      </DialogContent>
    </Dialog>
  )
}
