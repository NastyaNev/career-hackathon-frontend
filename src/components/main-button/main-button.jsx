import React from 'react';
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';

function MainButton ({ text }) {

    const ButtonForMain = styled(Button)({
        width: 140, 
        height: 40, 
        padding: 0, 
        marginRight: "40px", 
        textTransform: 'none', 
        fontFamily: 'YS Text',
        fontSize: '14px', 
        fontWeight: 500, 
        lineHeight: '20px'
      });

  return (
    <ButtonForMain variant="outlined" >
        {text}
    </ButtonForMain>
  )
}

export default MainButton