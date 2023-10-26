import { ReactElement } from "react";
import { Stack } from "@mui/material";
import styles from './page-sub-menu.module.css'


interface PageSubMenuProps {
  links: ReactElement;
}

const PageSubMenu = ({ links }: PageSubMenuProps) => {
  return (
    <Stack
      className={styles.tabContainer}
      direction={'row'}
      flexWrap={"nowrap"}
      gap={20}
    >
      {links}
    </Stack>
  )
}

export default PageSubMenu
