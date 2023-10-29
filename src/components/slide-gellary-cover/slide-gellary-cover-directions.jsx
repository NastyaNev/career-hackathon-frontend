import React from 'react';
import { Stack, Typography } from "@mui/material";
import MainButton from 'components/main-button/main-button';
import { NavLink } from 'react-router-dom';
import stylesButton from './styles-button.module.css';

function SlideGellaryCoverDirections () {

  return (
    <Stack direction="row" useFlexGap justifyContent="space-between" alignItems="center" mb={2.375} >
        <Typography sx={{fontFamily: 'YS Display', fontSize: '34px', fontStyle: 'normal', fontWeight: 500, lineHeight: '40px'}}>
            Поиск кандидата по направлению</Typography>
        
        <NavLink to="/candidates" target="_blank" className={stylesButton.button}>
            <MainButton text="Все кандидаты" variant="outlined"  />
        </NavLink>
    </Stack>
  )
}

export default SlideGellaryCoverDirections