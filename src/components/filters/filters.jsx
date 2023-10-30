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
        <DropDownMenu nameFilter='Направление' filterKey='direction' options={optionsDirections}  />
        <DropDownMenu nameFilter='Специальность' filterKey='profession' options={optionsProfessions}  />
        <DropDownMenu nameFilter='Опыт работы' filterKey='experience' options={optionsExperience}  />
        <DropDownMenu nameFilter='Формат работы' filterKey='format' options={optionsFormat}  />
        <DropDownMenu nameFilter='Занятость' filterKey='business' options={optionsBusyness}  />
        <DropDownMenu nameFilter='Локация' filterKey='city' options={optionsLocation}  />
        <Box>
            <Typography mb={1} mt={2.5} sx={{fontFamily: 'YS Display', fontSize: '16px', fontStyle: 'normal', fontWeight: 500, lineHeight: '20px'}}>Слова исключения</Typography>
            <WordsInput />
        </Box>

    </Stack>
  )
}

export default Filters