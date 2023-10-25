import React, { ReactNode } from 'react'
import styles from "./header-link.module.css"
import { NavLink } from 'react-router-dom';

interface IHeaderLinkProps {
  linkText: string;
  icon: ReactNode;
  link: string;
  id: number;
  isActive: boolean;
}

function HeaderLink({ linkText, icon, link, id, isActive }: IHeaderLinkProps) {
  const setActiveLinkStyle: string = isActive ? styles.header_link_active : styles.header_link;

  return (
    <NavLink className={setActiveLinkStyle} to={link}>
        <span>{linkText}</span>
    </NavLink>
  )
}

export default HeaderLink
