import React from "react";
import { Box, Stack } from "@mui/material";
import HeaderLink from "../app-header/header-link/header-link";

function Sidebar() {
  return (
    <Box sx={{backgroundColor: '#d9d9d9', minWidth: 140}}>
      <Stack ml={5} mt={11.875}>
        <Stack spacing={6.75}>
          <HeaderLink linkText="Главная" link="/" />
          <HeaderLink linkText="Вакансии" link="/vacancies" />
          <HeaderLink linkText="Кандидаты" link="/candidates" />
        </Stack>
      </Stack>
    </Box>
  );
}

export default Sidebar;
