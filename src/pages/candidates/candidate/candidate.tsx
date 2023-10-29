import React from 'react';
import {NavLink} from 'react-router-dom';
import blackArrow from '../../../images/blackarrow.svg';
import stylesBack from '../../vacancies/vacancy/styles.module.css';
import {Paper, Stack, Typography} from "@mui/material";
import PraktikumLogo from '../../../images/PraktikumLogo.svg'
import Like from '../../../images/Like.svg';
import download from '../../../images/forCandidat/download.svg';
import share from '../../../images/forCandidat/share.svg';
import avatar from '../../../images/avatar.jpg';
import geotag from '../../../images/forCandidat/geotag.svg';
import caseIcon from '../../../images/forCandidat/caseIcon.svg';
import award from '../../../images/forCandidat/award.svg';
import styles from './styles.module.css';
import schema from '../../../images/forCandidat/image_124.jpg';
import match from '../../../images/forCandidat/match.svg'

// Кандидат

function Candidate() {
  return (
    <>
      <NavLink to="/candidates" className={stylesBack.link}>
        <img src={blackArrow} alt="Стрелочка"/>
        <p className={stylesBack.back}>Все кандидаты</p>
      </NavLink>
      <Stack className={styles.container} display={"flex"} flexDirection={"row"} justifyContent={"space-between"}>
        <Stack className={styles.left} display={"flex"} flexDirection={"column"} gap={20}>
          <Paper elevation={3} className={styles.main}>
            <div className={styles.commonText}>
              <Typography variant="body2" className={styles.textTopGreenStyle}>&#9679; была сегодня</Typography>
              <Typography variant="body2" className={styles.timeOfEdit}>Резюме обновлено: 15.10.23</Typography>
            </div>
            <div className={styles.candidateAdditionalInfo}>
              <div className={styles.candidateInfo}>
                <div className={styles.avatarBlock}>
                  <img className={styles.avatar} src={avatar} alt="Аватар"/>
                  <div className={styles.nameBlock}>
                    <p className={styles.name}>Анна Иванова</p>
                    <p className={styles.extraInfo}>Веб дизайнер • 25 лет</p>
                  </div>
                </div>
              </div>
              <div className={styles.iconsContainer}>
                <img src={Like} alt="Лайк"/>
                <img src={download} alt='Скачать'/>
                <img src={share} alt="Поделиться"/>
              </div>
            </div>
            <div className={styles.locationBlock}>
              <p className={styles.subInformation}>
                <img src={geotag} alt="Геотэг"/>
                Петропавловск-Камчатский
              </p>
              <p className={styles.subInformation}>
                <img src={caseIcon} alt="Геотэг"/>
                Веб дизайнер в Яндекс Cloud
              </p>
              <div className={styles.experienceBlob}>5 лет</div>
            </div>
            <ul className={styles.conditions}>
              <li className={styles.condition}>
                <img src={PraktikumLogo} alt="Практикум"/>
                Дизайнер интерфейсов
              </li>
              <li className={styles.condition}>
                Офис
              </li>
              <li className={styles.condition}>
                Полная занятость
              </li>
              <li className={styles.condition}>
                Высшее образование
              </li>
            </ul>
          </Paper>
          <Paper elevation={3} className={styles.main}>
            <div className={styles.skillsBlock}>
              <p className={styles.paperHeading}>Навыки</p>
              <p className={styles.award}>
                <img src={award} alt='Грамота'/>
                — Ветеран Хахатонов Практикума!</p>
            </div>
            <ul className={styles.skills}>
              <li className={styles.skill}>Figma</li>
              <li className={styles.skill}>Web</li>
              <li className={styles.skill}>Material Design</li>
              <li className={styles.skill}>HIG</li>
              <li className={styles.skill}>Design Thinking</li>
            </ul>
            <div className={styles.schema}>
              <img src={schema} alt="Схема навыков"/>
              <div className={styles.matching}>
                <p className={styles.match}>Подходит по навыкам:</p>
                <p className={styles.matchingPercentage}>
                  Веб-дизайнер  в ВТБ
                  <img src={match} alt="Соответствие"/>
                </p>
                <p className={styles.matchingPercentage}>
                  UX-дизайнер  в МТС
                  <img src={match} alt="Соответствие"/>
                </p>
              </div>
            </div>
          </Paper>
          <Paper elevation={3} className={styles.main}>
            <p className={styles.paperHeading}>О себе</p>
            <p className={styles.about}>
              Люблю гулять под дождём, щенков, фильмы первой половины двадцатого века и проектировать сложные  веб-сервисы без четкого ТЗ
            </p>
          </Paper>
          <Stack display={"flex"} flexDirection={"row"} className={styles.twoPapersContainer}>
            <Paper elevation={3} className={styles.main}>
              <p className={styles.paperHeading}>О себе</p>
              <p className={styles.about}>
                Люблю гулять под дождём, щенков, фильмы первой половины двадцатого века и проектировать сложные  веб-сервисы без четкого ТЗ
              </p>
            </Paper>
            <Paper elevation={3} className={styles.main}>
              <p className={styles.paperHeading}>О себе</p>
              <p className={styles.about}>
                Люблю гулять под дождём, щенков, фильмы первой половины двадцатого века и проектировать сложные  веб-сервисы без четкого ТЗ
              </p>
            </Paper>
          </Stack>
        </Stack>
        <Stack>
          Правая часть
        </Stack>
      </Stack>
    </>
  )
}

export default Candidate
