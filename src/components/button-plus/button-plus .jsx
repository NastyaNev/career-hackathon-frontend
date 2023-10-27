import React from 'react';
import { Link, Paper, Stack, Tooltip } from "@mui/material";

function ButtonPlus({ image, className }) {
  return (
    <Tooltip title="Добавить">
        <Link component="button" underline='none' sx={{'&:hover': {opacity: [0.9, 0.8, 0.7]}, display: 'flex', textAlign: 'start'}}>
            <Paper sx={{ height: 24, width: 24, alignSelf: 'center', position: 'relative'}} className={className}>
                <Stack sx={{ position: 'absolute', left: '20%', top: '20%'}}>
                    <img src={image} alt="плюс" />
                </Stack>
            </Paper>
        </Link>
    </Tooltip>
  )
}

export default ButtonPlus 