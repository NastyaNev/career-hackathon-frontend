import { Box, Button, Typography } from '@mui/material'
import Filters from 'components/filters/filters'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Сandidates() {
  return (
    <Box>
      <Typography mb={3.5} sx={{fontАamily: 'YS Display', fontSize: '24px', fontStyle: 'normal', fontWeight: 500, lineHeight: '24px'}}>Кандидаты</Typography>
      <Filters />
      <NavLink to='/candidates/candidate' >
        <Button>Кандидат</Button>
      </NavLink>
    </Box>
  )
}

export default Сandidates