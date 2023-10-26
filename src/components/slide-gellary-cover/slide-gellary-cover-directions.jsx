import React from 'react';
import { Stack, Typography } from "@mui/material";
import MainButton from 'components/main-button/main-button';

function SlideGellaryCoverDirections () {

  return (
    <Stack direction="row" useFlexGap justifyContent="space-between" alignItems="center" mb={2.375} >
        <Typography sx={{fontFamily: 'YS Display', fontSize: '34px', fontStyle: 'normal', fontWeight: 500, lineHeight: '40px'}}>
            Поиск кандидата по направлению</Typography>
        <MainButton text="Все кандидаты" way="/candidates" />
    </Stack>
  )
}

export default SlideGellaryCoverDirections