import React, { useState } from 'react';
import { Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Menu, MenuItem, Button } from '@mui/material';
import { useNames } from '../../data';
import { KebabButton } from '../../kebab-button';
import { tableStyle, textHeaderStyle, textBodyStyle, contactStyle, photoStyle, ggInfoStyle, arrowDownStyle, textBodyVacancyStyle, HoverIcon } from '../../table-styles';
import like from '../../../images/Like.svg';
import likeFilled from '../../../images/like_filled.svg';
import telegram from '../../../images/telegram.svg';
import email from '../../../images/email.svg';
import stateDefault from '../../../images/State=Default.svg';
import statePressed from '../../../images/State=Pressed.svg';
import ggInfo from '../../../images/gg_info.svg';
import arrowDown from '../../../images/arrow_down.svg';
import { NavLink } from 'react-router-dom';
import stylesCard from '../../../components/direction-main-card/direction-main-card.module.css';
import DropDownTables from 'components/drop-down-menu/drop-down-tables';
// Отклики

function ApplicationsActual() {

  const [names, setNames] = useNames();
  const [anchorEl, setAnchorEl] = useState(null);
  const [sortingValue, setSortingValue] = useState('default');

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSortingChange = (value) => {
    setSortingValue(value);
    handleMenuClose();
  };

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
      <TableContainer>
        <Table sx={ tableStyle }>
          <TableHead>
            <TableRow  style={{ height: '48px' }}>
              <TableCell style={{ width: '40px' }}></TableCell>
              <TableCell style={{ width: '40px' }}>
                <Checkbox sx={{width: '24px', height: '24px', color: 'black'}}/>
              </TableCell>
              <TableCell  style={{ ...textHeaderStyle, width: '256px' }}>Кандидат</TableCell>
              <TableCell style={{ ...textHeaderStyle, width: '102px' }}>Контакты</TableCell>
              <TableCell style={{ ...textHeaderStyle, width: '192px' }}>Вакансия
                <Tooltip title="Сортировка">
                  <HoverIcon
                    src={arrowDown}
                    alt="Развернуть"
                    style={ arrowDownStyle }
                  />
                </Tooltip>
              </TableCell>
              <TableCell style={{ ...textHeaderStyle, minWidth: '72px' }}>
                Опыт
                <Tooltip title="Инфо">
                  <HoverIcon
                    src={ ggInfo }
                    alt="Опыт"
                    style={  ggInfoStyle }
                  />
                </Tooltip>
              </TableCell>
              <TableCell style={{ ...textHeaderStyle, width: '143px' }}>Локация</TableCell>
              <TableCell style={{ ...textHeaderStyle, width: '231px' }}>
                Статус
                <Tooltip title="Сортировка">
                  <Button
                    aria-controls="sorting-menu"
                    aria-haspopup="true"
                    onClick={handleMenuOpen}
                  >
                    <HoverIcon
                      src={arrowDown}
                      alt="Развернуть"
                      style={ arrowDownStyle }
                    />
                  </Button>
                </Tooltip>
              </TableCell>
              <TableCell style={{ ...textHeaderStyle, width: '105px' }}>Дата отклика</TableCell>
              <TableCell style={{ width: '48px' }}></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {names
              .filter((item) => {
                // Здесь проверьте, соответствует ли элемент выбранному статусу
                if (sortingValue === 'default' || sortingValue === 'Показать все') {
                  return true; // Показать все элементы
                } else {
                  return item.status === sortingValue;
                }
              })
              .map((item, index) => {
              if (
                (sortingValue === 'default' || sortingValue === 'Показать все') ||
                sortingValue === 'Показать все' || item.status === sortingValue
              ) {
              return (
                <TableRow style={{ height: '64px'}} key={index}>
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
                    <Tooltip title="Связаться через Телеграм">
                      <HoverIcon
                        style={ contactStyle }
                        src={telegram}
                        alt="Телеграм"
                      />
                    </Tooltip>
                    <Tooltip title="Связаться через e-mail">
                      <HoverIcon
                        src={email}
                        alt="Email"
                      />
                    </Tooltip>
                  </TableCell>
                  <TableCell style={ textBodyVacancyStyle }>
                    <NavLink to='/vacancies/vacancy' target="_blank" className={stylesCard.card_link}>
                        <Tooltip title={`Перейти на вакансию ${item.vacancy}`} >
                          <span>{item.vacancy} в {item.where}</span>
                        </Tooltip>
                    </NavLink>
                  </TableCell>
                  <TableCell style={ textBodyStyle }>{item.experience}</TableCell>
                  <TableCell style={ textBodyStyle }>{item.place}</TableCell>
                  <TableCell >
                    <DropDownTables status={item.status}/>
                  </TableCell>
                  <TableCell style={textBodyStyle}>
                    {item.date}
                  </TableCell>
                  <Tooltip title="Опции">
                    <TableCell>
                        <KebabButton />
                    </TableCell>
                  </Tooltip>
                </TableRow>
              );
              } else {
                return null;
              }
              })}
            </TableBody>
        </Table>

        <Menu
          id="sorting-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => handleSortingChange('default')}>Показать все</MenuItem>
          <MenuItem onClick={() => handleSortingChange('Новый')}>Новый</MenuItem>
          <MenuItem onClick={() => handleSortingChange('На рассмотрении')}>На рассмотрении</MenuItem>
          <MenuItem onClick={() => handleSortingChange('Интервью')}>Интервью</MenuItem>
          <MenuItem onClick={() => handleSortingChange('Отказ')}>Отказ</MenuItem>
        </Menu>
      </TableContainer>
  );
}

export default ApplicationsActual;
