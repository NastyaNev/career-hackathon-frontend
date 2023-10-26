import React from "react";
import { Avatar, Link, Stack, Tooltip, Typography, Box, Paper } from "@mui/material";
import avatar from "../../images/avatar.jpg";
import HeaderLink from "components/app-header/header-link/header-link";
import exit from '../../images/exit.svg';

function Sidebar() {
  return (
      <Box sx={{backgroundColor: '#1a1b22', width: 140, color: 'white', position: 'fixed'}} >
        
      <Tooltip title="Личный кабинет">
            <Link href="#" underline='none' sx={{'&:hover': {opacity: [0.9, 0.8, 0.7]}}}>
                <Paper sx={{ backgroundColor: '#2e2f36', width: 124, height: 84, margin: '72px auto 0 auto', alignSelf: 'center', position: 'relative'}}>
                    <Stack sx={{ position: 'absolute', left: '10%', top: '10%', display: 'flex', lexDirection: 'column', gap: '12px'}}>
                      <Avatar src={avatar} alt="аватар" />
                      <Typography sx={{alignSelf: 'flex-start', color: 'white', fontSize: "11px", lineHeight: '12px', fontFamily: 'YS Text'}}>Андрей Нориков</Typography>
                    </Stack>
                </Paper>
            </Link>
        </Tooltip>
        
        <Stack ml={1} mt={5} sx={{ height: 'calc(100vh - 196px)' }} useFlexGap justifyContent='space-between' >
          <Stack spacing={2.5}>
            <HeaderLink linkText="Главная" link="/" />
            <HeaderLink linkText="Мои вакансии" link="/vacancies" />
            <HeaderLink linkText="Все кандидаты" link="/candidates" />
            <HeaderLink linkText="Отклики" link="/applications" />
          </Stack>
          <Link href="#" underline='none' mb={2.5} sx={{'&:hover': {opacity: [0.9, 0.8, 0.7]}, display: 'flex',  flexDirection: 'row', gap: '1.5px'}} >
              <img src={exit} alt="выход" />
              <Typography sx={{alignSelf: 'center', color: '#b5b5b7', fontSize: "14px", lineHeight: '20px', fontFamily: 'YS Text'}}>Выход</Typography>
          </Link>
        </Stack>
      </Box>
  );
}

export default Sidebar;
