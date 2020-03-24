import React from 'react';
import { Typography, Box } from '@material-ui/core';

export default function Footer() {
  return (
    <Box p={2} color="text.primary" borderTop={1} borderColor="rgba(0, 0, 0, 0.12)">
      <Typography variant="overline" display="block" align="center">
        {'Copyright © '}Tantekos{' '}{new Date().getFullYear()}
      </Typography>
    </Box>
  );
}