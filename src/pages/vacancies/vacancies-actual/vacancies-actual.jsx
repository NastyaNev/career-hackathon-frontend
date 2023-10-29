import React from 'react';
import { Grid } from '@mui/material';
import {itemsVacancies} from '../../../utils/arrays/items-vacancies';
import DirectionMainCardVacancy from 'components/direction-main-card/direction-main-card-vacancy';
import styles from './vacancies-actual.module.css';

function VacanciesActual() {
  return (
  <Grid container rowSpacing={2.5} columnSpacing={{ xs: 1, sm: 2, md: 2.75 }} ml={0} mt={0} className={styles.grid_container}>
      {itemsVacancies.map((item, i) => (
        <Grid item>
            <DirectionMainCardVacancy key={i} item={item} wayVacancies='/vacancies/vacancy' />
        </Grid>
      ))}
   </Grid>
  )
}

export default VacanciesActual