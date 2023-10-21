import React from 'react';
import styles from "./main.module.css"

function Main() {
  return (
    <>
      <main>
        <p className={styles.main_text}>Привет, я главная страница</p>
        <p className={styles.main_text_d_bold}>Проверка шрифта YS Display Bold</p>
        <p className={styles.main_text_d_light}>Проверка шрифта YS Display Light</p>
        <p className={styles.main_text_d_heavy}>Проверка шрифта YS Display Heavy</p>
        <p className={styles.main_text_d_medium}>Проверка шрифта YS Display Medium</p>
        <p className={styles.main_text_d_regular}>Проверка шрифта YS Display Regular</p>
        <p className={styles.main_text_d_thin}>Проверка шрифта YS Display Thin</p>
        <p className={styles.main_text_t_bold_it}>Проверка шрифта YS Text Bold Itelic</p>
        <p className={styles.main_text_t_bold}>Проверка шрифта YS Bold</p>
        <p className={styles.main_text_t_tight_it}>Проверка шрифта YS Light Italic</p>
        <p className={styles.main_text_t_light}>Проверка шрифта YS Light</p>
        <p className={styles.main_text_t_mediun_it}>Проверка шрифта YS Medium Italic</p>
        <p className={styles.main_text_t_medium}>Проверка шрифта YS Medium</p>
        <p className={styles.main_text_t_regular_it}>Проверка шрифта YS Regular Italic</p>
        <p className={styles.main_text_t_regular}>Проверка шрифта YS Regular</p>
      </main>
    </>
  )
}

export default Main