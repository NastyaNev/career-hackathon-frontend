import * as React from 'react';
import { Stack, Select, Typography, FormControl, MenuItem, ListItemIcon, Checkbox, ListItemText, Button } from '@mui/material';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import arrowDown from '../../images/arrow_down_black.svg';
import arrowUp from '../../images/arrow_up.svg';
import styles from './drop-down-menu.module.css';

function DropDownMenu({ nameFilter, options }) {

//   const res = options.length === 0 ? false : true;

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = (e) => {
    e.preventDefault()
  };

  const MenuProps = {
    PaperProps: {
      style: {
        display: 'none'
      }
    }}

    

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <FormControl sx={{position: 'relative'}}>
        <Select
            defaultOpen
            input={
                <Stack flexDirection='row' justifyContent='space-between' alignItems='center' onClick={handleClick}>
                    <Typography ml={1.5} sx={{fontSize: '16px', fontWeight: 500, lineHeight: '20px'}}>{nameFilter}</Typography>
                    <img className={styles.arrow} src={open ? arrowUp : arrowDown} alt='развернуть' />
                </Stack>
            }
            disableUnderline
            sx={{display: 'flex', backgroundColor: '#dde0e4', color: 'black', width: '100%', borderRadius: '4px', height: '40px', marginTop: '12px', padding: '0'}}
            className={styles.select}
            variant="filled"
            MenuProps={MenuProps}
        />
        {open ? (
          <Stack sx={{p: '12px 8px 0 8px', gap: '8px'}}>
            {options.map((option) => (
            <MenuItem key={option} value={option} sx={{padding: 0}} className={styles.options} >
              <ListItemIcon sx={{height: '20px'}}>
                <Checkbox />
              </ListItemIcon>
              <ListItemText disableTypography primary={option} sx={{padding: 0}} className={styles.options} />
            </MenuItem>
            ))}
          </Stack>
         ) : null}
      </FormControl>
    </ClickAwayListener>
  );
}

export default DropDownMenu;