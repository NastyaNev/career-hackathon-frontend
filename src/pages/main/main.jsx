import React from 'react';
import styles from "./main.module.css";
import Button from '@mui/material/Button';

function Main() {
  return (
    <>
      <main className={styles.main_container}>
        <p className={styles.main_text}>Привет, я главная страница</p>
        <Button variant="contained">Hello world</Button>;
      </main>
    </>
  )
}

export default Main