import {Button} from '@mui/material'
import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './vacancies.module.css'

import plus from '../../images/plus.svg'
import PageSubMenu from "../../components/ui/page-sub-menu/PageSubMenu";
import PageSubMenuLink from "../../components/ui/page-sub-menu-link/PageSubMenuLink";

function Vacancies() {
  return (
    <>
      <main>
        <div className={styles.header}>
          <h2 className={styles.heading}>Мои вакансии</h2>
          <img src={plus} alt="Добавить"/>
        </div>
        <PageSubMenu
          links={
            <>
              <PageSubMenuLink to={'/'} text={'Актуальный'}/>
              <PageSubMenuLink to={'/'} text={'Архив'}/>
            </>
          }
        />
        <NavLink to='/vacancies/vacancy'>
          <Button>Вакансия</Button>
        </NavLink>
      </main>
    </>
  )
}

export default Vacancies
