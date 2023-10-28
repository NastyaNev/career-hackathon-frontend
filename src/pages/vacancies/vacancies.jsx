import React from 'react';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom'

function Vacancies() {

  return (
    <>
        <p>Привет, я страница с вакансиями</p>
        <NavLink to='/vacancies/vacancy' >
          <Button>Вакансия</Button>
        </NavLink>
    </>
  )
}

export default Vacancies
