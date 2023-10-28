// import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useNames } from '../data';
import { KebabButton } from 'pages/kebab-button';
import { tableStyle, textHeaderStyle, textBodyStyle, contactStyle, photoStyle, ggInfoStyle, arrowDownStyle, textBodyVacancyStyle, HoverIcon } from 'pages/table-styles';
import like from '../../images/Like.svg';
import likeFilled from '../../images/like_filled.svg';
import telegram from '../../images/telegram.svg';
import email from '../../images/email.svg';
import stateDefault from '../../images/State=Default.svg';
import statePressed from '../../images/State=Pressed.svg';
import ggInfo from '../../images/gg_info.svg';
import arrowDown from '../../images/arrow_down.svg';
// Отклики

function Applications() {

  const [names, setNames] = useNames();

  // Обработчики кликов
  const handleHeartClick = (index) => {
    const updatedNames = [...names];
    updatedNames[index].like = !updatedNames[index].like;
    setNames(updatedNames);
  };

  const handleStateClick = (index) => {
    const updatedNames = [...names];
    updatedNames[index].state = !updatedNames[index].state;
    setNames(updatedNames);
  };

  return (
    <>
      <TableContainer>
        <Table sx={ tableStyle }>
          <TableHead>
            <TableRow  style={{ height: '48px' }}>
              <TableCell style={{ width: '40px' }}></TableCell>
              <TableCell style={{ width: '40px' }}>
                <img
                  src={like}
                  alt="Галка"
                />
              </TableCell>
              <TableCell  style={{ ...textHeaderStyle, width: '256px' }}>Кандидат</TableCell>
              <TableCell style={{ ...textHeaderStyle, width: '102px' }}>Контакты</TableCell>
              <TableCell style={{ ...textHeaderStyle, width: '192px' }}>Вакансия</TableCell>
              <TableCell style={{ ...textHeaderStyle, width: '72px' }}>
                Опыт
                <img
                  src={ ggInfo }
                  alt="Опыт"
                  style={  ggInfoStyle }
                />
              </TableCell>
              <TableCell style={{ ...textHeaderStyle, width: '143px' }}>Локация</TableCell>
              <TableCell style={{ ...textHeaderStyle, width: '231px' }}>
                Статус
                <img
                  src={ arrowDown }
                  alt="Опыт"
                  style={  arrowDownStyle }
                />
              </TableCell>
              <TableCell style={{ ...textHeaderStyle, width: '105px' }}>Дата отклика</TableCell>
              <TableCell style={{ width: '48px' }}></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {names.map((item, index) => (
              <TableRow style={{ height: '64px' }} key={index}>
                <TableCell>
                  <HoverIcon
                    src={item.like ? likeFilled : like}
                    alt="Сердце"
                    onClick={() => handleHeartClick(index)}
                  />
                </TableCell>
                <TableCell>
                  <HoverIcon
                    src={item.state ? statePressed : stateDefault}
                    alt="Галка"
                    onClick={() => handleStateClick(index)}
                  />
                </TableCell>
                <TableCell style={ textBodyStyle }>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={item.photo}
                      alt="Фото кандидата"
                      style={ photoStyle }
                    />
                    <div>{item.name}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <HoverIcon
                    style={ contactStyle }
                    src={telegram}
                    alt="Телеграм"
                  />
                  <HoverIcon
                    src={email}
                    alt="Email"
                  />
                </TableCell>
                <TableCell style={ textBodyVacancyStyle }>{item.vacancy} в {item.where}</TableCell>
                <TableCell style={ textBodyStyle }>{item.experience}</TableCell>
                <TableCell style={ textBodyStyle }>{item.place}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell style={textBodyStyle}>
                  {item.date}
                </TableCell>
                <TableCell><KebabButton /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Applications;
