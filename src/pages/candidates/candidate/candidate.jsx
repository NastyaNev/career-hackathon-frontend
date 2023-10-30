import React from 'react';
import {NavLink, useParams} from 'react-router-dom';
import blackArrow from '../../../images/blackarrow.svg';
import stylesBack from '../../vacancies/vacancy/styles.module.css';
import {Paper, Stack, Typography, IconButton, Tooltip, List, ListSubheader, ListItemButton, ListItemIcon, ListItemText, Box} from "@mui/material";
import PraktikumLogo from '../../../images/PraktikumLogo.svg'
import Like from '../../../images/Like.svg';
import download from '../../../images/forCandidat/download.svg';
import share from '../../../images/forCandidat/share.svg';
import geotag from '../../../images/forCandidat/geotag.svg';
import caseIcon from '../../../images/forCandidat/caseIcon.svg';
import award from '../../../images/forCandidat/award.svg';
import styles from './styles.module.css';
import schema from '../../../images/forCandidat/image_124.jpg';
import match from '../../../images/forCandidat/match.svg';
import behance from  '../../../images/forCandidat/behance.svg';
import linkedin from '../../../images/forCandidat/linkedin.svg';
import hh from '../../../images/forCandidat/Hh.svg';
import mail from '../../../images/forCandidat/email.svg';
import tg from '../../../images/forCandidat/telegram.svg';
import CardForVacancy from '../../../components/direction-main-card/card-for-vacancy';
import list from '../../../images/forCandidat/clipboard-list.svg';
import MainButton from '../../../components/main-button/main-button';
import { itemsTime } from '../../../utils/arrays/items-candidates';

// Кандидат

function Candidate() {
  const { id } = useParams();

  const itemCandidat = itemsTime.find(item => item.id === id);

  const years = () => {if (itemCandidat.experience === 1) {return 'год'}
    else if (itemCandidat.experience > 1 && itemCandidat.experience < 5) {
      return "года"
    } else {
      return 'лет'
    }
  }

  const yearsOld = () => {
    if (itemCandidat.age >= 25 && itemCandidat.age <= 29) {return 'лет'}
    else if (itemCandidat.age === 20 || itemCandidat.age === 30 || itemCandidat.age === 40) {
      return 'лет'
    } else if (itemCandidat.age === 21 || itemCandidat.age === 31 || itemCandidat.age === 41){
      return 'год'
    } else {
      return 'года'
    }
  }

  return (
    <>
      <NavLink to="/candidates" className={stylesBack.link}>
        <img src={blackArrow} alt="Стрелочка"/>
        <p className={stylesBack.back}>Все кандидаты</p>
      </NavLink>
      <Stack className={styles.container} flexDirection="row" gap={2.5}>
        <Stack className={styles.left} flexDirection={"column"}>
          <Paper elevation={3} className={styles.main}>
            <div className={styles.commonText}>
              <Typography variant="body2" className={styles.textTopGreenStyle}>&#9679; была сегодня</Typography>
              <Typography variant="body2" className={styles.timeOfEdit}>Резюме обновлено: 15.10.23</Typography>
            </div>
            <div className={styles.candidateAdditionalInfo}>
              <div className={styles.candidateInfo}>
                <div className={styles.avatarBlock}>
                  <img className={styles.avatar} src={itemCandidat.avatar} alt="Аватар"/>
                  <div className={styles.nameBlock}>
                    <p className={styles.name}>{itemCandidat.name}</p>
                    <p className={styles.extraInfo}>{itemCandidat.profession} • {itemCandidat.age} {yearsOld()}</p>
                  </div>
                </div>
              </div>
              <div className={styles.iconsContainer}>
              <Tooltip title="Добавить в избранное">
                <IconButton aria-label="like" sx={{'&:hover': {opacity: [0.8, 0.8, 0.7]}, padding: 0, minWidth: 0}}>
                  <img src={Like} alt="Лайк"/>
                </IconButton>
              </Tooltip>
              <Tooltip title="Скачат резюме">
                <IconButton aria-label="download" sx={{'&:hover': {opacity: [0.8, 0.8, 0.7]}, padding: 0, minWidth: 0}}>
                  <img className={styles.icons} src={download} alt='Скачать'/>
                </IconButton>
              </Tooltip>
              <Tooltip title="Поделиться">
                <IconButton aria-label="share" sx={{'&:hover': {opacity: [0.8, 0.8, 0.7]}, padding: 0, minWidth: 0}}>
                  <img className={styles.icons} src={share} alt="Поделиться"/>
                </IconButton>
              </Tooltip>
              </div>
            </div>
            <div className={styles.locationBlock}>
              <p className={styles.subInformation}>
                <img src={geotag} alt="Геотэг"/>
                {itemCandidat.city}
              </p>
              <p className={styles.subInformation}>
                <img src={caseIcon} alt="Геотэг"/>
                {itemCandidat.prev}
              </p>
              <div className={styles.experienceBlob}>{itemCandidat.experience} {years()}</div>
            </div>
            <ul className={styles.conditions}>
              <li className={styles.condition}>
                <img src={PraktikumLogo} alt="Практикум"/>
                {itemCandidat.course}
              </li>
              <li className={styles.condition}>
                {itemCandidat.business}
              </li>
              <li className={styles.condition}>
                {itemCandidat.education}
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
              {itemCandidat.stack.map((item, i) => (
                  <li key={i} className={styles.skill}>{item}</li>
              ))}
            </ul>
            <div className={styles.schema}>
              <img src={schema} alt="Схема навыков"/>
              <div className={styles.matching}>
                <p className={styles.match}>Подходит по навыкам:</p>
                <p className={styles.matchingPercentage}>
                  Веб-дизайнер в ВТБ
                  <img src={match} alt="Соответствие"/>
                </p>
                <p className={styles.matchingPercentage}>
                  UX-дизайнер в МТС
                  <img src={match} alt="Соответствие"/>
                </p>
              </div>
            </div>
          </Paper>
          <Paper elevation={3} className={styles.main}>
            <p className={styles.paperHeading}>О себе</p>
            <p className={styles.about}>
              {itemCandidat.about}
            </p>
          </Paper>
          <Stack display={"flex"} flexDirection={"row"} className={styles.twoPapersContainer}>
            <Paper elevation={3} className={styles.main} sx={{width: '393px'}} >
              <p className={styles.paperHeading}>Портфолио и внешние источники</p>
              <List
                sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px', marginTop: "16px", padding: 0 }}
                component="nav"
              >
                <Tooltip title="Преейти на Behance" >
                  <ListItemButton sx={{padding: 0, gap: '6px'}}>
                    <ListItemIcon sx={{minWidth: 0}}>
                      <img src={behance} alt="media" />
                    </ListItemIcon>
                    <ListItemText primary={<Typography sx={{fontFamily: 'YS Text', fontSize: '11px', fontStyle: 'normal', fontWeight: 500, lineHeight: '12px', color: '#797981'}}>Портфолио на Behance</Typography>} />
                  </ListItemButton>
                </Tooltip>
                <Tooltip title="Преейти на LinkedIn" >
                  <ListItemButton sx={{padding: 0, gap: '6px'}}>
                    <ListItemIcon sx={{minWidth: 0}}>
                      <img src={linkedin} alt="media" />
                    </ListItemIcon>
                    <ListItemText primary={<Typography sx={{fontFamily: 'YS Text', fontSize: '11px', fontStyle: 'normal', fontWeight: 500, lineHeight: '12px', color: '#797981'}}>Профиль на LinkedIn</Typography>} />
                  </ListItemButton>
                </Tooltip>
                <Tooltip title="Преейти на hh.ru" >
                  <ListItemButton sx={{padding: 0, gap: '6px'}}>
                    <ListItemIcon sx={{minWidth: 0}}>
                      <img src={hh} alt="media" />
                    </ListItemIcon>
                    <ListItemText primary={<Typography sx={{fontFamily: 'YS Text', fontSize: '11px', fontStyle: 'normal', fontWeight: 500, lineHeight: '12px', color: '#797981'}}>Резюме на HH.ru</Typography>}  />
                  </ListItemButton>
                </Tooltip>
              </List>
            </Paper>
            <Paper elevation={3} className={styles.main} sx={{width: '393px'}}>
              <p className={styles.paperHeading}>Способ связи</p>
              <List
                sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '12px', marginTop: "16px", padding: 0 }}
                component="nav"
              >
                <Tooltip title="Написать" >
                  <ListItemButton sx={{padding: 0, gap: '6px'}}>
                    <ListItemIcon sx={{minWidth: 0}}>
                      <img src={mail} alt="media" />
                    </ListItemIcon>
                    <ListItemText primary={<Typography sx={{fontFamily: 'YS Text', fontSize: '11px', fontStyle: 'normal', fontWeight: 500, lineHeight: '12px', color: '#797981'}}>{itemCandidat.connection.email}</Typography>} />
                  </ListItemButton>
                </Tooltip>
                <Tooltip title="Преейти в Telegram" >
                  <ListItemButton sx={{padding: 0, gap: '6px'}}>
                    <ListItemIcon sx={{minWidth: 0}}>
                      <img src={tg} alt="media" />
                    </ListItemIcon>
                    <ListItemText primary={<Typography sx={{fontFamily: 'YS Text', fontSize: '11px', fontStyle: 'normal', fontWeight: 500, lineHeight: '12px', color: '#797981'}}>{itemCandidat.connection.tg}</Typography>} />
                  </ListItemButton>
                </Tooltip>
              </List>
            </Paper>
          </Stack>
          <Paper elevation={3} className={styles.main}>
            <p className={styles.paperHeading}>Опыт работы</p>
            <Stack flexDirection='row' gap={1.5} mt={2} >
              <Typography sx={{fontSize: '18px', fontStyle: 'normal', fontWeight: 400, lineHeight: '24px', color: '#797981', width: '163px'}}>{itemCandidat.prev}</Typography>
              <Stack spacing={1.5} justifyContent='space-between' sx={{width: '552px'}}>
                <Typography  className={styles.about}>{itemCandidat.functions}</Typography>
                
                <Stack spacing={0.5}>
                  <Typography className={styles.about} sx={{color: '#1A1B22', fontWeight: 900}}>Достижения:</Typography>
                  <Typography className={styles.about}>{itemCandidat.riches}</Typography>
                </Stack>
             </Stack>
            </Stack>
          </Paper>
        </Stack>
        <Stack spacing={2.5} sx={{maxWidth: '393px'}} >
          <CardForVacancy />
          <Tooltip title="Открыть сопроводительное письмо">
            <Box sx={{borderRadius: '6px', backgroundColor: '#F1F6FF', padding: '24px', cursor: 'pointer', '&:hover': {opacity: [0.8, 0.8, 0.7]}}}>
              <Stack flexDirection='row' alignItems='center' >
                <img src={list} alt='список' />
                <Typography sx={{fontFamily: 'YS Text', fontSize: '11px', fontStyle: 'normal', fontWeight: 500, lineHeight: '12px', color: '#797981'}}>Сопроводительное письмо</Typography>
              </Stack>
            </Box>
          </Tooltip>
          <Stack flexDirection='row' gap={1.5} >
            <MainButton text='Пригласить' variant='contained' width="118px" />
            <MainButton text='Отказать' variant='outlined' width="101px" />
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}

export default Candidate
