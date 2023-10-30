import React from 'react';
import { Grid } from '@mui/material';
import {itemsVacancies} from '../../../utils/arrays/items-vacancies';
import DirectionMainCardVacancy from 'components/direction-main-card/direction-main-card-vacancy';
import styles from './vacancies-actual.module.css';

function VacanciesActual() {
  return (
  <Grid container rowSpacing={2.5} columnSpacing={{ xs: 1, sm: 2, md: 2.75 }} ml={0} mt={1} className={styles.grid_container}>
      {itemsVacancies.map((item, i) => (
        <Grid item key={i}>
            <DirectionMainCardVacancy item={item} wayVacancies={`/vacancies/vacancy/${item.id}`} />
        </Grid>
      ))}
   </Grid>
  )
}

export default VacanciesActual