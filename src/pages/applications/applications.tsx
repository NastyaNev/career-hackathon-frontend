import React from 'react'
import { ButtonGroup, Stack } from "@mui/material";
import styles from './application.module.css';

import PageSubMenu from "../../components/ui/page-sub-menu/PageSubMenu";
import PageSubMenuLink from "../../components/ui/page-sub-menu-link/PageSubMenuLink";
import SearchInput from '../../components/search-input/search-input';
import ButtonPlus from '../../components/button-plus/button-plus';
import table from '../../images/view-table.svg';
import grid from '../../images/view-grid.svg';

function Applications() {
  return (
    <>
      <h2 className={styles.heading}>Отклики</h2>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
      >
        <PageSubMenu links={
          <>
            <PageSubMenuLink
              to={'.'}
              text={'Акутальные'}
              notifications={80}
            />
            <PageSubMenuLink
              to={'./new'}
              text={'Новые'}
              notifications={12}
              isImportant={true}
            />
            <PageSubMenuLink
              to={'./applications-archive'}
              text={'Архив'}
            />
          </>
        }
        />
          <div className={styles.filters}>
            <SearchInput className={styles.search} />
            <ButtonGroup className={styles.buttons}>
              <ButtonPlus image={table} className={styles.button} text='Вид: Таблица'/>
              <ButtonPlus image={grid} className={styles.button} text='Вид: Сетка' />
            </ButtonGroup>
          </div>
      </Stack>
    </>
  )
}

export default Applications
