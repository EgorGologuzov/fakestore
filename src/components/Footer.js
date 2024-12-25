import React from 'react';
import { Typography, Stack, Link } from '@mui/material';
import { Instagram, Facebook, Telegram, WhatsApp, Twitter } from '@mui/icons-material';

export default function Footer() {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      rowGap={2}
      columnGap={12}
      justifyContent="space-between"
      alignItems="center">
      <Stack direction="column">
        <Typography variant="h6" component="div">FakeStore</Typography>
        <Typography variant="subtitle2" component="div" color="textDisabled">
          © 2024-2025 FakeStore. Все права защищены.
        </Typography>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Link target="_blank" href='https://www.google.com'><Instagram /></Link>
        <Link target="_blank" href='https://www.google.com'><Facebook /></Link>
        <Link target="_blank" href='https://www.google.com'><Telegram /></Link>
        <Link target="_blank" href='https://www.google.com'><WhatsApp /></Link>
        <Link target="_blank" href='https://www.google.com'><Twitter /></Link>
      </Stack>
    </Stack>
  );
};
