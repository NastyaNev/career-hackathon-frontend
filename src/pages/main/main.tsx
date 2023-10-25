import React from 'react';
import styles from './main.module.css'
import { Stack } from '@mui/material';
import Carousel from '../../components/carousel/carousel';
import Highlight from "../../components/ui/highlight/highlight";
import list from '../../images/icons/list.svg';
import clock from '../../images/icons/clock.svg';
import personal from '../../images/icons/personal.svg';

function Main() {
  return (
    <>
      <Stack direction="row" useFlexGap justifyContent='space-between' alignItems='center'>
        <Highlight text={"Задач на сегодня"} notifications={3} icon={list} boxType={'tasks'} />
        <Highlight text={"Ответа ожидают"} notifications={10} icon={clock} boxType={'awaiting'} />
        <Highlight text={"Хотят работать у вас"} notifications={200} icon={personal} boxType={'work'} />
      </Stack>
      <Stack mt={7.5} spacing={7.5}>
        <Carousel title='Заголовок' buttonText='Текст кнопки' />
        <Carousel />
        <Carousel />
      </Stack>
    </>
  )
}

export default Main
