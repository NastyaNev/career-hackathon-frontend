import React from 'react'
import styles from "./header-link.module.css"
import { NavLink } from 'react-router-dom';

function HeaderLink(props) {
  const { linkText, icon, link, className, id } = props;
//   const setActiveLinkStyle = ({ isActive }: { isActive: boolean }): string => {
//     return isActive ? `mt-4 mb-4 ${styles.header_link} ${(className)} text_color_primary`
//       : `mt-4 mb-4 ${styles.header_link} ${(className)} text_color_inactive`;
//   }

  return (
    <NavLink className={styles.header_link} to={link}>
      <div>
        <span>{linkText}</span>
      </div>
    </NavLink>
  )
}

export default HeaderLink