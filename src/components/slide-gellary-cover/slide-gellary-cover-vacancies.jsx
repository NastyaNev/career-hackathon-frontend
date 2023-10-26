import React from 'react';
import { Link, Paper, Stack, Typography, Tooltip } from "@mui/material";
import MainButton from '../../components/main-button/main-button';
import plus from '../../images/plus.svg';

function SlideGellaryCoverVacancies () {
    
  return (
    <Stack direction="row" useFlexGap justifyContent="space-between" alignItems="center" mb={2.375} >
        
        <Stack direction='row'>
            <Typography mr={2} sx={{fontFamily: 'YS Display', fontSize: '34px', fontStyle: 'normal', fontWeight: 500, lineHeight: '40px'}}>
            Мои вакансии</Typography>
            <Tooltip title="Добавить">
                <Link component="button" underline='none' sx={{'&:hover': {opacity: [0.9, 0.8, 0.7]}, display: 'flex', textAlign: 'start'}}>
                    <Paper sx={{ height: 24, width: 24, alignSelf: 'center', position: 'relative'}}>
                        <Stack sx={{ position: 'absolute', left: '20%', top: '20%'}}>
                            <img src={plus} alt="плюс" />
                        </Stack>
                    </Paper>
                </Link>
            </Tooltip>
        </Stack>
        <MainButton text="Мои вакансии" way="/vacancies"/>
    </Stack>
  )
}

export default SlideGellaryCoverVacancies