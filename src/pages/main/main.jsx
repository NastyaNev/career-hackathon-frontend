import React from 'react';
import styles from "./main.module.css"

function Main() {
  return (
    <>
      <main className={styles.main_container}>
        <p className={styles.main_text}>Привет, я главная страница</p>
      </main>
    </>
  )
}

export default Main