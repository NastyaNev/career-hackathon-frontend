import React from 'react';
import { Stack } from '@mui/material';
import SlideGallery from '../../components/slide-gallery/slide-gallery';
import styles from './main.module.css';
import list from '../../images/icons/list.svg';
import clock from '../../images/icons/clock.svg';
import personal from '../../images/icons/personal.svg';
import Highlight from '../../components/ui/highlight/highlight';

function Main() {
  return (
    <>
      <Stack direction="row" useFlexGap justifyContent='space-between' alignItems='center' mr={5} ml={0.625} spacing={2.625}>
        <Highlight text={"Задач на сегодня"} notifications={3} icon={list} boxType={'tasks'} />
        <Highlight text={"Ответа ожидают"} notifications={10} icon={clock} boxType={'awaiting'} />
        <Highlight text={"Хотят работать у вас"} notifications={200} icon={personal} boxType={'work'} />
      </Stack>
      <Stack mt={7.5} spacing={7.5} className={styles.galleries_container}>
        <SlideGallery title='Заголовок' buttonText='Текст кнопки' />
        <SlideGallery title='Заголовок' buttonText='Текст кнопки' />
        <SlideGallery title='Заголовок' buttonText='Текст кнопки' />
      </Stack>
    </>
  )
}

export default Main