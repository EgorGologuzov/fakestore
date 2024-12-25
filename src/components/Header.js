import { AppBar, Toolbar, Typography, IconButton, Container, Badge } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material';
import { useCart } from '../hooks/useCart';

export default function Header() {
  const { goods, openCart } = useCart();
  
  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FakeStore
          </Typography>
          <IconButton color="inherit" onClick={openCart}>
            <Badge color="error" badgeContent={Object.keys(goods).length}>
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
