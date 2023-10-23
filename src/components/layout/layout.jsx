import React from "react";
import AppHeader from "../app-header/app-header";
import { Outlet } from "react-router";
import styles from "./layout.module.css";
import Sidebar from "../sidebar/sidebar";
import { Stack } from "@mui/material";

function Layout() {
  return (
    <>
      <AppHeader />
      <Stack direction="row">
        <Sidebar />
        <main className={styles.main}>
          <Outlet />
        </main>
      </Stack>
    </>
  );
}

export default Layout;
