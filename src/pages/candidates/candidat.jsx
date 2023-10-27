import React from 'react';
import { NavLink } from 'react-router-dom';

// Кандидат

function Candidat() {
  return (
    <>
        <NavLink to="/candidates">
            <p>Назад в Все кандидаты</p>
        </NavLink>
        <p>Привет! Я страница с кандидатом</p>
    </>
  )
}

export default Candidat