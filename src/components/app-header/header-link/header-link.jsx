import React from 'react'
import styles from "./header-link.module.css"
import { NavLink } from 'react-router-dom';

function HeaderLink(props) {
  const { linkText, icon, link, className, id } = props;
  const setActiveLinkStyle = ({ isActive }) => {
    return isActive ? styles.header_link_active : styles.header_link;
  }

  return (
    <NavLink className={setActiveLinkStyle} to={link}>
        <span>{linkText}</span>
    </NavLink>
  )
}

export default HeaderLink