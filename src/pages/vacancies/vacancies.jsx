import { ButtonGroup } from '@mui/material'
import React from 'react'
import styles from './vacancies.module.css'

import plus from '../../images/plus.svg'
import PageSubMenu from "../../components/ui/page-sub-menu/PageSubMenu";
import PageSubMenuLink from "../../components/ui/page-sub-menu-link/PageSubMenuLink";
import SearchInput from "../../components/search-input/search-input";
import ButtonPlus from "../../components/button-plus/button-plus";
import table from "../../images/view-table.svg";
import grid from "../../images/view-grid.svg";
import {Stack} from "@mui/system";
import {Outlet} from "react-router";

function Vacancies() {
  return (
    <>
        <div className={styles.header}>
          <h2 className={styles.heading}>Мои вакансии</h2>
          <ButtonPlus image={plus} />
        </div>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
        >
          <PageSubMenu
            links={
              <>
                <PageSubMenuLink
                  to={'.'} text={'Актуальный'}
                />
                <PageSubMenuLink to={'./vacancies-archive '} text={'Архив'}/>
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
      <Outlet />
    </>
  )
}

export default Vacancies
