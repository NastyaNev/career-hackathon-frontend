import React, {useEffect} from 'react';
import {NavLink, useParams} from 'react-router-dom';
import {ButtonGroup, Link, Paper, Stack, Tooltip} from "@mui/material";
import { Outlet } from 'react-router-dom';


import {itemsVacancies} from "../../../utils/arrays/items-vacancies";

import blackArrow from '../../../images/blackarrow.svg'
import edit from '../../../images/edit.svg'
import trash from '../../../images/trash.svg'
import arrowDown from '../../../images/arrow_down_blue.svg'

import styles from './styles.module.css'
import PageSubMenu from "../../../components/ui/page-sub-menu/PageSubMenu";
import PageSubMenuLink from "../../../components/ui/page-sub-menu-link/PageSubMenuLink";
import SearchInput from "../../../components/search-input/search-input";
import ButtonPlus from "../../../components/button-plus/button-plus";
import table from "../../../images/view-table.svg";
import grid from "../../../images/view-grid.svg";

interface IVacancyProps {
  name: string;
  company: string;
  format: string;
  experience: number;
  salary: string;
  technologies: Array<string>
}

function Vacancy() {
  const { id } = useParams();

  const itemVacancy = itemsVacancies.find(item => item.id === id);

  return (
    <>
      <NavLink to="/vacancies" className={styles.link}>
        <img src={blackArrow} alt="Стрелочка"/>
        <p className={styles.back}>Мои вакансии</p>
      </NavLink>
      <Paper className={styles.wrapper} elevation={3}>
        <Stack display={"flex"} flexDirection={"column"}>
          <span className={styles.description}>
            <span className={styles.container}>
              <span className={styles.heading}>
                <h2 className={styles.vacancy}>{itemVacancy!.name}</h2>
                <p className={styles.company}>{itemVacancy!.company}</p>
              </span>
              <span className={styles.buttons}>
                <Tooltip title='Редактировать вакансию'>
                  <img className={styles.button} src={edit} alt="Редактировать"/>
                </Tooltip>
                <Tooltip title='Удалить вакансию'>
                  <img className={styles.button} src={trash} alt="Удалить"/>
                </Tooltip>
              </span>
            </span>
          </span>
          <ul className={styles.conditions}>
            <li className={styles.condition}>
              {itemVacancy!.city}
            </li>
            <li className={styles.condition}>
              {itemVacancy!.format}
            </li>
            <li className={styles.condition}>
              {`Опыт от ${itemVacancy!.experience} лет`}
            </li>
            {itemVacancy!.technologies.map((technology, index) => {
              return (
                <li key={index} className={styles.condition}>
                  {technology}
                </li>
              )
            })}
            <li className={styles.condition}>
              {itemVacancy!.salary}
            </li>
          </ul>
        </Stack>
        <Stack>
          <Tooltip title='Отсортировать подходящих кандидатов'>
            <button className={styles.find}>Найти кандидата</button>
          </Tooltip>
          <Tooltip title='Развернуть описание вакансии'>
            <Link style={{display: "flex", justifyContent: "flex-end"}} className={styles.description_link} component="button" underline='none'>
              <p className={styles.open}>Описание вакансии</p>
              <img src={arrowDown} alt="Вниз"/>
            </Link>
          </Tooltip>
        </Stack>
      </Paper>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        pr={5}
      >
        <PageSubMenu
          links={
            <>
              <PageSubMenuLink
                to={'.'} text={'Мои кандидаты'}
              />
              <PageSubMenuLink
                to={`/vacancies/vacancy/${itemVacancy!.id}/vacancy-applications`} text={'Отклики'}
              />
            </>
          }
        />
        <div className={styles.filters}>
          <SearchInput className={styles.search} />
          <ButtonGroup className={styles.filterButtons}>
            <ButtonPlus image={table} className={styles.filterButton} text='Вид: Таблица'/>
            <ButtonPlus image={grid} className={styles.filterButton} text='Вид: Сетка' />
          </ButtonGroup>
        </div>
      </Stack>
      <Outlet />
    </>
  )
}

export default Vacancy
