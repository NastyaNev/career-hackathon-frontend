import React, { useState } from "react";
import { FormControl, InputAdornment, TextField } from '@mui/material';
import close from '../../images/close.svg';
import glass from '../../images/search.svg';
import styles from './search-input.module.css'

function SearchInput({className}) {

  const [showClearIcon, setShowClearIcon] = useState("none");
  const [inputText, setInputText] = useState('')

  const handleChange = (event) => {
    setInputText(event.target.value);
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
  };

  const handleClick = () => {
    setInputText('');
  };

  return (
    <div id="app" className={className}>
      <FormControl sx={{width: '100%'}}>
        <TextField
          value={inputText}
          placeholder="Поиск"
          size="small"
          variant="outlined"
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={glass} alt='Поиск' />
              </InputAdornment>
            ),
            endAdornment: inputText ? (
              <InputAdornment
                position="end"
                style={{ display: showClearIcon }}
                onClick={handleClick}
              >
                <img className={styles.image} src={close} alt='Закрыть' />
              </InputAdornment>
            ) : null
          }}
        />
      </FormControl>
    </div>
  );
};

export default SearchInput;
