import React from 'react';
import { Stack } from '@mui/material';
import styles from './main.module.css';
import list from '../../images/icons/list.svg';
import clock from '../../images/icons/clock.svg';
import personal from '../../images/icons/personal.svg';
import Highlight from '../../components/ui/highlight/highlight';
import Gellary from '../../components/gellary/gellary';
import SlideGellaryCoverDirections from '../../components/slide-gellary-cover/slide-gellary-cover-directions';
import SlideGellaryCoverVacancies from '../../components/slide-gellary-cover/slide-gellary-cover-vacancies';
import SlideGellaryCoverCandidates from '../../components/slide-gellary-cover/slide-gellary-cover-candidates';
import DirectionMainCard from '../../components/direction-main-card/direction-main-card';
import DirectionMainCardVacancy from '../../components/direction-main-card/direction-main-card-vacancy';
import DirectionMainCardTime from '../../components/direction-main-card/direction-main-card-time';
import { itemsCandidates } from '../../utils/arrays/items-candidates';
import { itemsVacancies } from '../../utils/arrays/items-vacancies';
import { itemsTime } from '../../utils/arrays/items-time';

function Main() {
  
  return (
    <>
      <Stack direction="row" useFlexGap justifyContent='space-between' alignItems='center' mr={5} ml={0.625} spacing={2.625}>
        <Highlight text={"Задач на сегодня"} notifications={3} icon={list} boxType={'tasks'} />
        <Highlight text={"Ответа ожидают"} notifications={10} icon={clock} boxType={'awaiting'} />
        <Highlight text={"Хотят работать у вас"} notifications={200} icon={personal} boxType={'work'} />
      </Stack>
      <Stack mt={7.5} spacing={7.5} className={styles.galleries_container}>
        <Gellary cover={<SlideGellaryCoverDirections />} card={DirectionMainCard} items={itemsCandidates} />
        <Gellary cover={<SlideGellaryCoverVacancies />} card={DirectionMainCardVacancy} items={itemsVacancies} />
        <Gellary cover={<SlideGellaryCoverCandidates />} card={DirectionMainCardTime} items={itemsTime} />
      </Stack>
    </>
  )
}

export default Main