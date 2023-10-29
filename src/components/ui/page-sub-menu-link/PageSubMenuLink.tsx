import { NavLink } from "react-router-dom";
import styles from "./PageSubMenuLink.module.css"
import classNames from "classnames";

interface PageSubMenuLinkProps {
  to: string;
  text: string;
  notifications?: number;
  isImportant?: boolean;
}

const PageSubMenuLink = ({
  to,
  text,
  notifications = 0,
  isImportant = false,
} : PageSubMenuLinkProps) => {
  const areNotificationsVisible = notifications > 0;
  return (
    <NavLink to={to} className={styles.link}>
      {({ isActive }) => (
        <div className={styles.tabContainer}>
          <div className={styles.tabContainer__item}>
            <p
              className={styles.tabContainer__text}

            >
              {text}
            </p>
            {areNotificationsVisible && (
              <span
                className={classNames(
                  styles.tabContainer__number,
                  isImportant ? styles.tabContainer__number__important : undefined
                )}
              >
              {notifications}
            </span>
            )}
          </div>
          {isActive ? <span className={styles.underline}></span> : undefined}
        </div>
      )}
    </NavLink>
  )
}

export default PageSubMenuLink
