import React from "react";
import AppHeader from "../app-header/app-header";
import { Outlet } from "react-router";
import styles from "./layout.module.css";
import Sidebar from "../sidebar/sidebar";
import { Stack } from "@mui/material";
import { useLocation } from 'react-router-dom';

function Layout() {
  const { pathname } = useLocation();

  return (
    <Stack direction='row'>
      <Sidebar />
      <Stack className={styles.main_container}>
        <AppHeader />
        <main className={pathname === "/" ? styles.main : styles.other_pages }>
          <Outlet />
        </main>
      </Stack>
    </Stack>
  );
}

export default Layout;
