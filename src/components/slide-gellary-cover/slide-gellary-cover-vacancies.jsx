import React from 'react';
import { Stack, Typography } from "@mui/material";
import MainButton from '../../components/main-button/main-button';
import ButtonPlus from 'components/button-plus/button-plus ';
import plus from '../../images/plus.svg';


function SlideGellaryCoverVacancies () {
    
  return (
    <Stack direction="row" useFlexGap justifyContent="space-between" alignItems="center" mb={2.375} >
        
        <Stack direction='row'>
            <Typography mr={2} sx={{fontFamily: 'YS Display', fontSize: '34px', fontStyle: 'normal', fontWeight: 500, lineHeight: '40px'}}>
            Мои вакансии</Typography>
            <ButtonPlus image={plus}/>
        </Stack>
        <MainButton text="Мои вакансии" way="/vacancies"/>
    </Stack>
  )
}

export default SlideGellaryCoverVacancies