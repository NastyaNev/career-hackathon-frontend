import React from "react";
import HeaderLink from "../app-header/header-link/header-link";
import { Avatar, Link, Stack, Tooltip, Typography, Box } from "@mui/material";
import avatar from "../../images/avatar.jpg";

function Sidebar() {
  return (
    <Box sx={{backgroundColor: '#1a1b22', width: 140, color: 'white'}}>
      <Tooltip title="Личный кабинет">
          <Link href="#" underline='none' ml={1} mt={3} sx={{'&:hover': {opacity: [0.9, 0.8, 0.7]}, display: 'flex',  flexDirection: 'column', gap: '12px'}} >
            <Avatar src={avatar} alt="аватар" />
            <Typography sx={{alignSelf: 'flex-start', color: 'white'}}>Имя рекрутера</Typography>
          </Link>
      </Tooltip>
      <Stack ml={1} mt={5}>
        <Stack spacing={2.5}>
          <HeaderLink linkText="Главная" link="/" />
          <HeaderLink linkText="Мои вакансии" link="/vacancies" />
          <HeaderLink linkText="Все кандидаты" link="/candidates" />
          <HeaderLink linkText="Отклики" link="/applications" />
        </Stack>
      </Stack>
    </Box>
  );
}

export default Sidebar;
