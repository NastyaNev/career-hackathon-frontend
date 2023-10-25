import React, { ReactNode } from 'react'
import styles from "./header-link.module.css"
import { NavLink } from 'react-router-dom';

type THeaderLinkProps = {
  linkText: string;
  link: string;
  icon: JSX.Element;
  className?: string;
  id?: string;
}

function HeaderLink(props: THeaderLinkProps) {
  const { linkText, icon, link, className, id } = props;
  const setActiveLinkStyle = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? styles.header_link_active : styles.header_link;
  }

  return (
    <NavLink className={setActiveLinkStyle} to={link}>
        <span>{linkText}</span>
    </NavLink>
  )
}

export default HeaderLink
