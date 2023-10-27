import { Button } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Сandidates() {
  return (
    <>
      <main>
        <p>Привет, я страница с кандидатами</p>
        <NavLink to='/candidates/candidate' >
          <Button>Кандидат</Button>
        </NavLink>
      </main>
    </>
  )
}

export default Сandidates