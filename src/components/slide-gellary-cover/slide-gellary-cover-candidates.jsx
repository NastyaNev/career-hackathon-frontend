import React from 'react';
import { Button, Stack, Typography } from "@mui/material";

function SlideGellaryCoverCandidates () {
    

  return (
    <Stack direction="row" useFlexGap justifyContent="space-between" alignItems="center" mb={2.375} >
        <Typography sx={{fontFamily: 'YS Display', fontSize: '34px', fontStyle: 'normal', fontWeight: 500, lineHeight: '40px'}}>
            Недавно посмотренные кандидаты</Typography>
    </Stack>
  )
}

export default SlideGellaryCoverCandidates