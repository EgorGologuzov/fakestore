import { AppBar, Toolbar, Typography, IconButton } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material';

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          FakeStore
        </Typography>
        <IconButton color="inherit">
          <ShoppingCart />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
