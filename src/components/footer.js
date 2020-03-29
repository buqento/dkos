import React from 'react';
import { Typography, Box } from '@material-ui/core';

export default function Footer() {
  return (
    <Box pt={2} mt={2} color="text.primary" className="campaign-container">
        <Typography variant="overline" display="block" align="center">
          {'Copyright © '}Tantekos{' '}{new Date().getFullYear()}
        </Typography>
    </Box>
  );
}