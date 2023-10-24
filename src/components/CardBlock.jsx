// Карточки

import React, { useState } from 'react';
import { Paper, Typography, IconButton } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const CardBlock = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const showPreviousButton = currentIndex > 0;
  const showNextButton = currentIndex < items.length - 1;

  return (
    <Paper elevation={3} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px' }}>
      {showPreviousButton && (
        <IconButton onClick={handlePrevious}>
          <ArrowLeftIcon style={{ color: 'blue' }} />
        </IconButton>
      )}
      {items.map((item, index) => (
        <Paper key={index} elevation={3} style={{ width: '290px', height: '200px', borderRadius: '6px' }}>
          <Typography>{item}</Typography>
        </Paper>
      ))}
      {showNextButton && (
        <div style={{ position: 'relative' }}>
          <IconButton onClick={handleNext}>
            <ChevronRightIcon style={{ color: 'blue' }} />
          </IconButton>
        </div>
      )}
    </Paper>
  );
};

export default CardBlock;
