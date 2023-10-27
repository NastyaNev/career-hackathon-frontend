import { Autocomplete, Box, FormControl, FormLabel, InputAdornment, InputLabel, OutlinedInput, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import search from '../../images/search.svg';

function Filters () {

  return (
    <Stack sx={{width: 290, outline: "1px solid red", height: 500}}>
        <FormLabel sx={{ width: '25ch', backgroundColor: "white", borderRadius: '15px', color: '#b5b5b7 !important' }} >
            <OutlinedInput
                id="outlined-adornment-password"
                endAdornment={
                <InputAdornment>
                    <Box sx={{}}>
                    <img src={search} />
                    </Box>
                </InputAdornment>
                }
            />
            <InputLabel variant="filled" disableAnimation sx={{fontFamily: 'YS Text', fontSize: '11px', fontWeight: 400, lineHeight: '12px'}}
            
            >Поиск</InputLabel>
        </FormLabel>
        {/* <Box>
            <Typography>Слова исключения</Typography>
            <TextField></TextField>
        </Box> */}

    </Stack>
  )
}

export default Filters