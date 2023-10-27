import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import SearchInput from '../search-input/search-input';
import WordsInput from '../words-input/words-input';
import DropDown from '../drop-down/drop-down';

function Filters () {

  return (
    <Stack sx={{width: 290, outline: "1px solid red", height: 500}}>
        <Typography mb={2.5} sx={{fontFamily: 'YS Display', fontSize: '20px', fontStyle: 'normal', fontWeight: 500, lineHeight: '24px'}}>Фильтры</Typography>
        <SearchInput />
        <DropDown />
        <Box>
            <Typography mb={1} mt={2.5} sx={{fontFamily: 'YS Display', fontSize: '16px', fontStyle: 'normal', fontWeight: 500, lineHeight: '20px'}}>Слова исключения</Typography>
            <WordsInput />
        </Box>

    </Stack>
  )
}

export default Filters