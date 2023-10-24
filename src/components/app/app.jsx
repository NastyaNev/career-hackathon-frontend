import React from "react";
import { Route, Routes } from "react-router";
import Main from "../../pages/main/main";
import Layout from "../layout/layout";
import Vacancies from "../../pages/vacancies/vacancies";
import Candidates from "../../pages/candidates/candidates";
import NotFound from "../../pages/not-found/not-found";
// import { ThemeProvider, createTheme } from "@mui/material";

import { Container, Grid } from '@mui/material';
import BlockHeader from '../BlockHeader';
import CardBlock from '../CardBlock';

const categoriesData = ['Программирование', 'Дизайн', 'Анализ данных', 'Менеджмент'];
const jobsData = ['Вакансия 1', 'Вакансия 2', 'Вакансия 3', 'Вакансия 4'];
const candidatesData = ['Имя 1', 'Имя 2', 'Имя 3', 'Имя 4'];

// const theme = createTheme({
//   palette: {
//     primary: '#D9D9D9',
//     // secondary: purple,
//   },
// });

function App() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <BlockHeader title="Поиск кандидата по направлению" />
        </Grid>
        <Grid item xs={12}>
          <CardBlock items={categoriesData} />
        </Grid>
        <Grid item xs={12}>
          <BlockHeader title="Мои вакансии" />
        </Grid>
        <Grid item xs={12}>
          <CardBlock items={jobsData} />
        </Grid>
        <Grid item xs={12}>
          <BlockHeader title="Недавно просмотренные кандидаты" />
        </Grid>
        <Grid item xs={12}>
          <CardBlock items={candidatesData} />
        </Grid>
      </Grid>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="vacancies" element={<Vacancies />} />
          <Route path="candidates" element={<Candidates />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Container>
  );
}


export default App;
