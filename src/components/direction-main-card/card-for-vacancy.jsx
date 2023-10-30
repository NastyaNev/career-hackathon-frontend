// Карусель с вакансиями
import { Paper, Stack, Typography, Tooltip, Box } from "@mui/material";
import React from "react";
import styles from "./direction-main-card.module.css";
import pin from "../../images/map-pin.svg";
import suitcase from "../../images/briefcase.svg";
import { NavLink } from "react-router-dom";
import { itemVacancy } from '../../utils/arrays/item_vacancy';
import { findByLabelText } from "@testing-library/react";
import DropDownTables from "../drop-down-menu/drop-down-tables";
import MainButton from "..//main-button/main-button";


function CardForVacancy(props) {

  const { wayVacancies } = props;

  const cardStyle = {
    width: '100%',
    boxShadow: "0 0 10px 0 4px 6px rgba(176, 190, 197, 0.3)",
    backgroundColor: '#F1F6FF',
    borderRadius: '6px'
  };

  const stackStyle = {
    padding: '24px',
    display: 'flex',
    lexDirection: 'column',
    gap: '20px'
  };

  const divDownStyle = {
    display: 'flex',
    height: '16px',
    gap: '8px',
  };

  const textHeaderStyle = {
    color: '#1A1B22',
    fontFamily: 'YS Display',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '24px'
  };

  const textTopStyle = {
    fontFamily: 'YS Text',
    color: '#797981',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '20px'
  };

  const textDownStyle = {
    color: '#797981',
    fontFamily: 'YS Text',
    fontWeight: '400',
    fontSize: '11px',
    height: '12px',
    alignItems: 'flex-start'
  };

  return (
    <Box sx={{width: '100%'}}>
      <Tooltip title={`Перейти на вакансию ${itemVacancy.name}`} >
        <Box elevation={3} square={false} sx={ cardStyle }>
          <Stack sx={ stackStyle }>
                <Box>
                <Typography variant="h6" style={ textHeaderStyle }>Отклик: {itemVacancy.name}</Typography>
                <Typography variant="body2" style={ textTopStyle }>{itemVacancy.company}</Typography>
              </Box>
              <Box><DropDownTables /></Box>
              <Stack style={ divDownStyle }>
                <Typography variant="body2" style={{ ...textDownStyle, marginRight: '12px' }}>Посмотрено: 20.10.23</Typography>
                <Typography variant="body2" style={{ ...textDownStyle, marginRight: '12px' }}>Дата отклика: 20.10.23</Typography>
              </Stack>
              <Box mt={2.5}><MainButton variant='outlined' text='Добавить комментарий' width='199px' /></Box>
          </Stack>
        </Box>
      </ Tooltip>
    </Box>
  )
}

export default CardForVacancy;
