import { Box, Button, Stack, Typography } from '@mui/material'
import Filters from 'components/filters/filters'
import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Grid } from '@mui/material';
import {itemsTime} from '../../utils/arrays/items-candidates';
import DirectionMainCardTime from 'components/direction-main-card/direction-main-card-time';
import styles from './candidates.module.css'
import MainButton from 'components/main-button/main-button';

function Сandidates() {
  const stackFilters = useRef();
  const [filter, setFilter] = useState({})
  
  function applyFilters() {
  const filtersElem = stackFilters.current;
  const filterCheckboxes = filtersElem.querySelectorAll("[data-filter]")
  const filterState = {}
  for(const c of filterCheckboxes){
    const groupId = c.getAttribute('data-group')
    const id = c.getAttribute('data-id')
    const value = c.checked

    if (filterState[groupId]== null){
      filterState[groupId]= {}
    }

    filterState[groupId][id] = value
  }

  setFilter(filterState)
  }

  let candidates = itemsTime

  for (const [groupKey, groupValue] of Object.entries(filter)) {
    const filterValues = Object
    .entries(groupValue)
    .filter(([itemKey,  itemValue]) => itemValue)
    .map(([itemKey,  itemValue]) => itemKey)  
    
    if (filterValues.length > 0) {
      if (groupKey == "experience") {
        let filteredCandidates = []
        if (filterValues.includes("Менее 1 года"))  {
          filteredCandidates =  [...filteredCandidates, ...candidates.filter( c => c["experience"] < 1)]
        }
        if (filterValues.includes("От 1 года до 3 лет"))  {
          filteredCandidates =  [...filteredCandidates, ...candidates.filter( c => c["experience"] >= 1 && c["experience"] < 3)]
        }
        if (filterValues.includes("От 3 до 6 лет"))  {
          filteredCandidates =  [...filteredCandidates, ...candidates.filter( c => c["experience"] >= 3 && c["experience"] < 6)]
        }
        if (filterValues.includes("Более 6 лет"))  {
          filteredCandidates =  [...filteredCandidates, ...candidates.filter( c => c["experience"] >= 6)]
        }  
        
        candidates = filteredCandidates

      }
      else {
        candidates = candidates.filter( c => filterValues.includes(c[groupKey]))
      }
      
    }    
  }


  return (
    <>
      <Typography mb={3.5} sx={{fontFamily: 'YS Display', fontSize: '24px', fontStyle: 'normal', fontWeight: 500, lineHeight: '24px'}}>Кандидаты</Typography>

      <Stack direction='row' >
        <Stack mr={2.5} ref={stackFilters}>
          <Filters />
          <MainButton text='Применить' variant='contained' className={styles.button} onClick={applyFilters} />
        </Stack>

        <Box>
          <Grid container rowSpacing={2.5} columnSpacing={{ xs: 1, sm: 2, md: 2.5 }} mt={2.75} className={styles.grid_container}>
            {candidates.map((item, i) => (
              <Grid item key={i}>
                  <DirectionMainCardTime item={item} wayTime={`/candidates/candidate/${item.id}`} />
              </Grid>
            ))}
            {candidates.length == 0 && (
              <div>Не найдено!!!</div>
            )}
          </Grid>
        </Box>
      </Stack>
    </>
  )
}

export default Сandidates