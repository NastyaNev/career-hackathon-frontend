// Стили для таблиц

import React from 'react';
import { styled } from '@mui/system';

export const tableStyle = {
  '& .MuiTableCell-sizeMedium': {
    padding: '0px 8px',
  },
};

export const textHeaderStyle = {
  color: '#1A1B22',
  fontFamily: 'YS Text',
  fontWeight: '500',
  fontSize: '14px',
  lineHeight: '20px',
};

export const textBodyStyle = {
  color: '#1A1B22',
  fontFamily: 'YS Text',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '20px',
};

export const contactStyle = {
  marginRight: '8px',
};

export const photoStyle = {
  width: '36px',
  display: 'inline-block',
  verticalAlign: 'middle',
  borderRadius: '50%',
  marginRight: '8px'
}

export const ggInfoStyle = {
  width: '16px',
  height: '16px',
  marginLeft: '4px',
  verticalAlign: 'middle'
}

export const arrowDownStyle = {
  width: '24px',
  height: '24px',
  marginLeft: '4px',
  verticalAlign: 'middle'
};

export const textBodyVacancyStyle = {
  color: '#1D6BF3',
  fontFamily: 'YS Text',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '20px'
};

export const HoverIcon = styled('img')({
  cursor: 'pointer',
  transition: 'opacity 0.3s',
  '&:hover': {
    opacity: 0.8,
  },
});
