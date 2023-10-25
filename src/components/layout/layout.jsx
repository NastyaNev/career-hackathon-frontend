import React from "react";
import AppHeader from "../app-header/app-header";
import { Outlet } from "react-router";
import styles from "./layout.module.css";
import Sidebar from "../sidebar/sidebar";
import { Stack } from "@mui/material";

function Layout() {
  return (
    <Stack direction='row'>
      <Sidebar />
      <Stack>
        <AppHeader />
        <main className={styles.main}>
          <Outlet />
        </main>
      </Stack>
    </Stack>
  );
}

export default Layout;
