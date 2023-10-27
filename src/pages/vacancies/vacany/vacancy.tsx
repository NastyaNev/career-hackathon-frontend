import React from 'react';
import {NavLink} from 'react-router-dom';
import {Paper, Stack} from "@mui/material";

import {itemsVacancies} from "../../../utils/arrays/items-vacancies";

import blackArrow from '../../../images/blackarrow.svg'
import edit from '../../../images/edit.svg'
import trash from '../../../images/trash.svg'
import arrowDown from '../../../images/arrow_down_blue.svg'

import styles from './styles.module.css'

interface IVacancyProps {
  name: string;
  company: string;
  format: string;
  experience: number;
  salary: string;
  technologies: Array<string>
}

const itemVacancy = itemsVacancies[0];

function Vacancy() {
  return (
    <>
      <NavLink to="/vacancies" className={styles.link}>
        <img src={blackArrow} alt="Стрелочка"/>
        <p>Назад в Мои вакансии</p>
      </NavLink>
      <Paper className={styles.wrapper} elevation={1}>
        <Stack display={"flex"} flexDirection={"column"}>
          <span className={styles.description}>
            <span className={styles.container}>
              <span className={styles.heading}>
                <h2 className={styles.vacancy}>{itemVacancy.name}</h2>
                <p className={styles.company}>{itemVacancy.company}</p>
              </span>
              <span className={styles.buttons}>
                  <img className={styles.button} src={edit} alt="Редактировать"/>
                  <img className={styles.button} src={trash} alt="Удалить"/>
              </span>
            </span>
          </span>
          <ul className={styles.conditions}>
            <li className={styles.condition}>
              {itemVacancy.city}
            </li>
            <li className={styles.condition}>
              {itemVacancy.format}
            </li>
            <li className={styles.condition}>
              {`Опыт от ${itemVacancy.experience} лет`}
            </li>
            {itemVacancy.technologies.map(technology => {
              return (
                <li className={styles.condition}>
                  {technology}
                </li>
              )
            })}
            <li className={styles.condition}>
              {itemVacancy.salary}
            </li>
          </ul>
        </Stack>
        <Stack>
          <button className={styles.find}>Найти кандидата</button>
          <div style={{display: "flex", justifyContent: "flex-end"}}>
            <p className={styles.open}>Описание вакансии</p>
            <img src={arrowDown} alt="Вниз"/>
          </div>
        </Stack>
      </Paper>
    </>
  )
}

export default Vacancy
