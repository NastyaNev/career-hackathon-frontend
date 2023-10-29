import * as React from 'react';
import { Select, FormControl, MenuItem } from '@mui/material';
import styles from './drop-down-menu.module.css';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';


function DropDownTables() {

const [choose, setChoose] = React.useState('Новый');

const handleChange = (event) => {
  setChoose(event.target.value);
};

let color = () => {
    if(choose === "Новый") {return '#c2e5ce'}
    else if (choose === "На рассмотрении") {return '#ffe1Bd'}
    else if (choose === "Интервью") {return '#ccc2ed'}
    else {return '#ffdde5'}
}

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
            disableUnderline
            sx={{display: 'flex', backgroundColor: color, maxWidth: '199px', minWidth: '110px', width: 'calc(100vw - 1241px)', borderRadius: '4px', height: '40px', padding: '0'}}
            className={styles.select}
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