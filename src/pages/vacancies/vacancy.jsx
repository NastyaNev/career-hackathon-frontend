import React from 'react';
import { NavLink } from 'react-router-dom';

// Вакансия

function Vacancy() {
  return (
    <>
        <NavLink to="/vacancies">
            <p>Назад в Мои вакансии</p>
        </NavLink>
        <p>Привет! Я страница с вакансией</p>
    </>
  )
}

export default Vacancy