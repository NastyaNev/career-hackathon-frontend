import { Box, Button, Stack, Typography } from '@mui/material'
import Filters from 'components/filters/filters'
import React from 'react'
import { NavLink } from 'react-router-dom';
import { Grid } from '@mui/material';
import {itemsTime} from '../../utils/arrays/items-candidates';
import DirectionMainCardTime from 'components/direction-main-card/direction-main-card-time';
import styles from './candidates.module.css'
import MainButton from 'components/main-button/main-button';

function Сandidates() {
  return (
    <>
      <Typography mb={3.5} sx={{fontFamily: 'YS Display', fontSize: '24px', fontStyle: 'normal', fontWeight: 500, lineHeight: '24px'}}>Кандидаты</Typography>

      <Stack direction='row' >
        <Stack mr={2.5}>
          <Filters />
          <MainButton text='Применить' variant='contained' className={styles.button} />
          <NavLink to='/candidates/candidate' >
            <Button>Кандидат</Button>
          </NavLink>
        </Stack>

        <Box>
          <Grid container rowSpacing={2.5} columnSpacing={{ xs: 1, sm: 2, md: 2.5 }} mt={2.75} className={styles.grid_container}>
            {itemsTime.map((item, i) => (
              <Grid item key={i}>
                  <DirectionMainCardTime item={item} wayTime={`/candidates/candidate/${item.id}`} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>
    </>
  )
}

export default Сandidates