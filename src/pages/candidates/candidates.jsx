import { Button } from '@mui/material'
import Filters from 'components/filters/filters'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Сandidates() {
  return (
    <>
      <p>Привет, я страница с кандидатами</p>
      <NavLink to='/candidates/candidate' >
        <Button>Кандидат</Button>
      </NavLink>
      <Filters />
    </>
  )
}

export default Сandidates