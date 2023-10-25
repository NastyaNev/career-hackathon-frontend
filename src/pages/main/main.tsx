import React from 'react';
import styles from './main.module.css'
import { Stack } from '@mui/material';
import Carousel from '../../components/carousel/carousel';
import Highlight from "../../components/ui/highlight/highlight";
import list from '../../images/icons/list.svg'

function Main() {
  return (
    <>
      <Stack direction="row" useFlexGap justifyContent='space-between' alignItems='center'>
        <p>место для статистики</p>
        <p>место для статистики</p>
        <p>место для статистики</p>
      </Stack>
      <Stack mt={7.5} spacing={7.5}>
        <Carousel title='Заголовок' buttonText='Текст кнопки' />
        <Carousel />
        <Carousel />
      </Stack>
      <Highlight text={"Задач на сегодня"} notifications={3} icon={list} boxType={'tasks'} />
    </>
  )
}

export default Main
