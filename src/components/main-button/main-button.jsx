import React from 'react';
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

// Кнопка с голубым фоном - variant='contained'
// Кнопка без фона - variant='outlined'

function MainButton ({ text, variant, width, onClick }) {

    const ButtonForMain = styled(Button)({
        width: width, 
        height: 40, 
        padding: 0, 
        textTransform: 'none', 
        fontFamily: 'YS Text',
        fontSize: '14px', 
        fontWeight: 500, 
        lineHeight: '20px'
      });

  return (
      <ButtonForMain variant={variant} onClick={onClick}>
          {text}
      </ButtonForMain>
  )
}

export default MainButton