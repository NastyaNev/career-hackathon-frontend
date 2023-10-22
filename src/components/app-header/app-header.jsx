import React from "react";
import HeaderLink from "./header-link/header-link";
import styles from "./app-header.module.css";
import notification from "../../images/notification.svg";
import avatar from "../../images/avatar.jpg";
import stylesLayout from "../layout/layout.module.css";
import IconButton from "@mui/material/Button";
import { Avatar, Link, Stack, Tooltip } from "@mui/material";

function AppHeader() {
  return (
    <header className={styles.header_background}>
      <Stack direction="row" useFlexGap justifyContent='space-between' alignItems='center' className={stylesLayout.page}>
        <Stack direction="row" spacing={10.5}>
          <HeaderLink linkText="Главная" link="/" />
          <HeaderLink linkText="Вакансии" link="/vacancies" />
          <HeaderLink linkText="Кандидаты" link="/candidates" />
        </Stack>
        <Stack direction="row" spacing={5}>
          <Tooltip title="Уведомления">
            <IconButton aria-label="delete" sx={{padding: 0}}>
              <img src={notification} alt="колокольчик" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Личный кабинет">
            <Link href="#" underline='none' sx={{'&:hover': {opacity: [0.9, 0.8, 0.7]}}}>
              <Avatar src={avatar} alt="аватар" />
            </Link>
          </Tooltip>
        </Stack>
      </Stack>
    </header>
  );
}

export default AppHeader;
