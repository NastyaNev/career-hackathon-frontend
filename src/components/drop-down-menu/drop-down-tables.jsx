import React, { useState, useEffect } from 'react';
import { Select, FormControl, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';


function DropDownTables({ status }) {

const [choose, setChoose] = useState(status);
const [color, setColor] = useState(getColor(status));

function getColor(status) {
  switch (status) {
    case "Новый":
      return '#c2e5ce';
    case "На рассмотрении":
      return '#ffe1Bd';
    case "Интервью":
      return '#ccc2ed';
    default:
      return '#ffdde5';
  }
}

useEffect(() => {
  setChoose(status);
  setColor(getColor(status));
}, [status]);

const handleChange = (event) => {
  setChoose(event.target.value);
};

const BootstrapInput = styled(InputBase)(() => ({
    '& .MuiInputBase-input': {
      padding: '10px 26px 10px 12px',
      fontFamily: 'YS Text',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '20px',
      color: '#1a1b22',
      '&:focus': {
        display: 'none'
      },
    },
  }));

  return (
      <FormControl sx={{position: 'relative'}}>
        <Select
            IconComponent={(props) => (
                <KeyboardArrowDownRoundedIcon {...props}/>
            )}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={choose}
            onChange={handleChange}
            input={<BootstrapInput />}
            sx={{display: 'flex', backgroundColor: color, maxWidth: '199px', minWidth: '110px', width: 'calc(100vw - 1241px)', borderRadius: '4px', height: '40px', padding: '0'}}
            variant="filled"
        >
            <MenuItem value={'Новый'}>Новый</MenuItem>
            <MenuItem value={'На рассмотрении'}>На рассмотрении</MenuItem>
            <MenuItem value={'Интервью'}>Интервью</MenuItem>
            <MenuItem value={'Отказ'}>Отказ</MenuItem>
        </Select>
      </FormControl>
  );
}

export default DropDownTables;
