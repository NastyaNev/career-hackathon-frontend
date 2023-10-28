import React from 'react';
import { Link, Paper, Stack, Typography, Tooltip } from "@mui/material";
import MainButton from '../../components/main-button/main-button';
import plus from '../../images/plus.svg';
import ButtonPlus from '../../components/button-plus/button-plus';

function SlideGellaryCoverVacancies () {
    
  return (
    <Stack direction="row" useFlexGap justifyContent="space-between" alignItems="center" mb={2.375} >
        <Stack direction='row'>
            <Typography mr={2} sx={{fontFamily: 'YS Display', fontSize: '34px', fontStyle: 'normal', fontWeight: 500, lineHeight: '40px'}}>
            Мои вакансии</Typography>
            <ButtonPlus image={plus} text="Добавить" />
        </Stack>
        <MainButton text="Все вакансии" />
    </Stack>
  )
}

export default SlideGellaryCoverVacancies