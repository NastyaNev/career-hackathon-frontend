import React from "react";
import HeaderLink from "./header-link/header-link";
import styles from "./app-header.module.css";

function AppHeader() {
  //   const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.links_container}>
        <HeaderLink linkText="Главная" link="/" />
        <HeaderLink linkText="Вакансии" link="/vacancies" />
        <HeaderLink linkText="Кандидаты" link="/candidates" />
      </div>
    </header>
  );
}

export default AppHeader;
