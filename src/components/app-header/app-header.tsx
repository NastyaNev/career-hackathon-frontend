import React from "react";
import styles from "./app-header.module.css";
import hand from "../../images/hand.svg";
import messages from "../../images/messages.svg";
import IconButton from "@mui/material/Button";
import { Box, FormControl, FormHelperText, InputAdornment, InputLabel, OutlinedInput, Stack, TextField, Tooltip, Typography } from "@mui/material";
import search from '../../images/YaGPT.svg';
import icon from '../../images/arrow.svg';

function AppHeader() {
  return (
    <header className={styles.header_background}>
      <Stack direction="row" useFlexGap justifyContent='space-between' alignItems='center' className={styles.header_content}>
        <Stack>
        {/* <FormControl sx={{ width: '25ch', backgroundColor: "white", borderRadius: '15px', height: 40, color: '#b5b5b7 !important' }} >
        <InputLabel disableAnimation sx={{fontFamily: 'YS Text', fontSize: '11px', fontWeight: 400, lineHeight: '12px'}}>Напиши мне</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            endAdornment={
              <InputAdornment position="end">
                <Box sx={{height: 40, marginTop: '5px'}}>
                  <img src={icon} />
                </Box>
              </InputAdornment>
            }
          />
        </FormControl> */}
            <img src={search} alt="поиск с Алисой" />
        </Stack>
        <Stack direction="row" useFlexGap justifyContent='flex-end' alignItems='center' className={styles.header_content}>
          <Stack direction="row" spacing={1.5} mr={5}>
            <Tooltip title="Уведомления">
              <IconButton aria-label="delete" sx={{'&:hover': {opacity: [0.8, 0.8, 0.7]}, padding: 0, minWidth: 0}}>
                <img src={hand} alt="уведомления" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Сообщения">
              <IconButton aria-label="delete" sx={{'&:hover': {opacity: [0.8, 0.8, 0.7]}, padding: 0, minWidth: 0}}>
                <img src={messages} alt="сообщения" />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>
      </Stack>
    </header>
  );
}

export default AppHeader;
