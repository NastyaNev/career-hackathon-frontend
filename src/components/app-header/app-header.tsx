import React from "react";
import styles from "./app-header.module.css";
import hand from "../../images/hand.svg";
import messages from "../../images/messages.svg";
import IconButton from "@mui/material/Button";
import { Stack, Tooltip } from "@mui/material";
import search from '../../images/YaGPT.svg';

function AppHeader() {
  return (
    <header className={styles.header_background}>
      <Stack direction="row" useFlexGap justifyContent='space-between' alignItems='center' className={styles.header_content}>
        <Stack>
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
