import { Box, Button, Stack, Typography } from '@mui/material'
import Filters from 'components/filters/filters'
import React from 'react'
import { NavLink } from 'react-router-dom';
import { Grid } from '@mui/material';
import {itemsTime} from '../../utils/arrays/items-time';
import DirectionMainCardTime from 'components/direction-main-card/direction-main-card-time';
import styles from './candidates.module.css'

function Сandidates() {
  return (
    <>
      <Typography mb={3.5} sx={{fontАamily: 'YS Display', fontSize: '24px', fontStyle: 'normal', fontWeight: 500, lineHeight: '24px'}}>Кандидаты</Typography>

      <Stack direction='row' >
        <Box mr={2.5}>
          <Filters />
          <NavLink to='/candidates/candidate' >
            <Button>Кандидат</Button>
          </NavLink>
        </Box>

        <Grid container rowSpacing={2.5} columnSpacing={{ xs: 1, sm: 2, md: 2.75 }} mt={2.75} className={styles.grid_container}>
          {itemsTime.map((item, i) => (
            <Grid item>
                <DirectionMainCardTime key={i} item={item} wayTime='/candidates/candidate' />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </>
  )
}

export default Сandidates