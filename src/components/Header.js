import { AppBar, Toolbar, Typography, IconButton, Container, Badge } from '@mui/material'
import { ShoppingCart, LightMode, DarkMode } from '@mui/icons-material';
import { useCart } from '../hooks/useCart';
import { useTheme } from '../hooks/useTheme';

export default function Header() {
  const { goods, openCart } = useCart();
  const { theme, toggleTheme } = useTheme();
  
  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FakeStore
          </Typography>
          <IconButton color="inherit" onClick={toggleTheme}>
            {theme.darkMode && <DarkMode />}
            {!theme.darkMode && <LightMode />}
          </IconButton>
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
