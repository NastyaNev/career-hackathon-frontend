// Заголовки блоков на главной

import React from 'react';
import { Typography, Button, Paper } from '@mui/material';

const BlockHeader = ({ title }) => {
  return (
    <Paper elevation={3} style={{ padding: '20px', display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="h6">{title}</Typography>
      <Button variant="outlined">Смотреть все</Button>
    </Paper>
  );
};

export default BlockHeader;
