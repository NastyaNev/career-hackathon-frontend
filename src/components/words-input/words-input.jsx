import React, { useState } from "react";
import { FormControl, InputAdornment, TextField } from '@mui/material';
import close from '../../images/close.svg';
import styles from '../search-input/search-input.module.css'

function WordsInput() {

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
    <div id="app">
      <FormControl sx={{width: '100%'}}>
        <TextField
          value={inputText}
          placeholder="Слова, через запятую"
          size="small"
          variant="outlined"
          onChange={handleChange}
          InputProps={{
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

export default WordsInput;