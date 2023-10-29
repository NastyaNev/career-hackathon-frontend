import React from 'react';
import { NavLink } from 'react-router-dom';
import blackArrow from '../../images/blackarrow.svg';
import stylesBack from '../vacancies/vacancy/styles.module.css';

// Кандидат

function Candidat() {
  return (
    <>
        <NavLink to="/candidates" className={stylesBack.link}>
          <img src={blackArrow} alt="Стрелочка"/>
          <p className={stylesBack.back}>Все кандидаты</p>
        </NavLink>
        <p>Привет! Я страница с кандидатом</p>
    </>
  )
}

export default Candidat
