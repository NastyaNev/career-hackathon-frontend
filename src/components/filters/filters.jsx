import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import SearchInput from '../search-input/search-input';
import WordsInput from '../words-input/words-input';
import DropDownMenu from 'components/drop-down-menu/drop-down-menu';
import { optionsDirections, optionsProfessions, optionsExperience, optionsFormat, optionsBusyness, optionsLocation } from '../../utils/arrays/filters-option-arrays'

function Filters () {

  return (
    <Stack sx={{width: 290}}>
        <Typography mb={2.5} sx={{fontFamily: 'YS Display', fontSize: '20px', fontStyle: 'normal', fontWeight: 500, lineHeight: '24px'}}>Фильтры</Typography>
        <SearchInput />
        <DropDownMenu nameFilter='Направление' options={optionsDirections} />
        <DropDownMenu nameFilter='Специальность' options={optionsProfessions} />
        <DropDownMenu nameFilter='Опыт работы' options={optionsExperience} />
        <DropDownMenu nameFilter='Формат работы' options={optionsFormat} />
        <DropDownMenu nameFilter='Занятость' options={optionsBusyness} />
        <DropDownMenu nameFilter='Локация' options={optionsLocation} />
        <Box>
            <Typography mb={1} mt={2.5} sx={{fontFamily: 'YS Display', fontSize: '16px', fontStyle: 'normal', fontWeight: 500, lineHeight: '20px'}}>Слова исключения</Typography>
            <WordsInput />
        </Box>

    </Stack>
  )
}

export default Filters