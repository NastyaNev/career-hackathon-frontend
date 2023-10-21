import React from "react";
import AppHeader from "../app-header/app-header";
import { Outlet } from "react-router";
import styles from "./layout.module.css";

function Layout() {
  return (
    <>
      <AppHeader />
      <div className={styles.page}>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
