import React from "react";
import HeaderLink from "./header-link/header-link";
import styles from "./app-header.module.css";
import notification from "../../images/notification.svg";
import avatar from "../../images/avatar.jpg";
import stylesLayout from "../layout/layout.module.css";

function AppHeader() {
  return (
    <header className={styles.header_background}>
      <div className={`${styles.header_content} ${stylesLayout.page}`}>
        <div className={styles.links_container}>
          <HeaderLink linkText="Главная" link="/" />
          <HeaderLink linkText="Вакансии" link="/vacancies" />
          <HeaderLink linkText="Кандидаты" link="/candidates" />
        </div>
        <nav className={styles.icon_menu_container}>
          <a className={styles.icon_menu_link} href="#" >
            <img src={notification} alt="колокольчик" />
          </a>
          <a className={styles.icon_menu_link} href="#" >
            <img className={styles.icon_avatar} src={avatar} alt="аватар" />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default AppHeader;
