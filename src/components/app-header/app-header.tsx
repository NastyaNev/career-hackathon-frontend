import React from "react";
import styles from "./app-header.module.css";
import { NotificationIcon } from "../../images/icons/notification";
import avatar from "../../images/avatar.jpg";
import IconButton from "@mui/material/Button";
import { Avatar, Link, Stack, Tooltip, Typography } from "@mui/material";

function AppHeader() {
  return (
    <header className={styles.header_background}>
      <Stack direction="row" useFlexGap justifyContent='space-between' alignItems='center' className={styles.header_content} ml={5}>
        <Tooltip title="Личный кабинет">
          <Link href="#" underline='none' sx={{'&:hover': {opacity: [0.9, 0.8, 0.7]}, display: 'flex',  ftexDirection: 'row', gap: '12px'}} >
            <Avatar src={avatar} alt="аватар" />
            <Typography sx={{alignSelf: 'center'}}>Имя рекрутера</Typography>
          </Link>
        </Tooltip>
        <Stack direction="row" spacing={2.125}>
          <Tooltip title="Уведомления">
            <IconButton aria-label="delete" sx={{padding: 0, minWidth: 0}}>
              <NotificationIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Уведомления">
            <IconButton aria-label="delete" sx={{padding: 0, minWidth: 0}}>
              <NotificationIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>
    </header>
  );
}

export default AppHeader;
