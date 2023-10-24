import React from 'react';
import { Stack } from '@mui/material';
import SlideGallery from '../../components/slide-gallery/slide-gallery';


function Main() {
  return (
    <>
      <Stack direction="row" useFlexGap justifyContent='space-between' alignItems='center' mr={5} ml={0.625} spacing={2.625}>
        <p>место для статистики</p>
        <p>место для статистики</p>
        <p>место для статистики</p>
      </Stack>
      <Stack mt={7.5} spacing={7.5}>
        <SlideGallery title='Заголовок' buttonText='Текст кнопки' />
        <SlideGallery title='Заголовок' buttonText='Текст кнопки' />
        <SlideGallery title='Заголовок' buttonText='Текст кнопки' />
      </Stack>
    </>
  )
}

export default Main