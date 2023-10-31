// Кнопка кебаб из таблиц

import React, { useState } from 'react';
import { Popover, Button, List, ListItem } from '@mui/material';
import kebabMenu from '../images/kebab-menu.svg';

export const KebabButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button onClick={handleClick}>
      <img src={kebabMenu} alt="Три точки" />
      </Button>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <List>
          <ListItem>Скачать резюме</ListItem>
          <ListItem>Написать</ListItem>
          <ListItem>Поделиться</ListItem>
          <ListItem>Удалить</ListItem>
        </List>
      </Popover>
    </div>
  );
};
