import { Button } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Vacancies() {
  return (
    <>
      <main>
        <p>Привет, я страница с вакансиями</p>
        <NavLink to='/vacancies/vacancy' >
          <Button>Вакансия</Button>
        </NavLink>
      </main>
    </>
  )
}

export default Vacancies