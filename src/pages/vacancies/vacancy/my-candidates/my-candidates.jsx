import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Checkbox, Tooltip } from '@mui/material';
import { NavLink } from 'react-router-dom'
import { useNames } from '../../../data';
import { KebabButton } from '../../../kebab-button';
import { tableStyle, textHeaderStyle, textBodyStyle, contactStyle, photoStyle, ggInfoStyle, arrowDownStyle, HoverIcon } from '../../../table-styles';
import like from '../../../../images/Like.svg';
import likeFilled from '../../../../images/like_filled.svg';
import telegram from '../../../../images/telegram.svg';
import email from '../../../../images/email.svg';
import match from '../../../../images/match.svg';
import stateDefault from '../../../../images/State=Default.svg';
import statePressed from '../../../../images/State=Pressed.svg';
import ggInfo from '../../../../images/gg_info.svg';
import arrowDown from '../../../../images/arrow_down.svg';
import DropDownTables from 'components/drop-down-menu/drop-down-tables';

// Вакансия

function MyCandidates() {
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
        <NavLink to="/vacancies">
            <p>Назад в Мои вакансии</p>
        </NavLink>

        <TableContainer>
        <Table sx={ tableStyle }>
          <TableHead>
            <TableRow style={{ height: '48px' }}>
              <TableCell style={{ width: '40px' }}></TableCell>
              <TableCell style={{ width: '40px' }}>
                <Checkbox sx={{width: '24px', height: '24px', color: 'black'}}/>
              </TableCell>
              <TableCell style={{ ...textHeaderStyle, width: '256px' }}>Кандидат</TableCell>
              <TableCell style={{ ...textHeaderStyle, width: '108px' }}>Соответствие</TableCell>
              <TableCell style={{ ...textHeaderStyle, width: '102px' }}>Контакты</TableCell>
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
              <TableCell style={{ ...textHeaderStyle, width: '218px' }}>Последнее место работы</TableCell>
              <TableCell style={{ ...textHeaderStyle, width: '231px' }}>
                Статус
                <Tooltip title="Сортировка">
                  <HoverIcon
                    src={arrowDown}
                    alt="Развернуть"
                    style={ arrowDownStyle }
                  />
                </Tooltip>
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
                  <Tooltip title="Процент соответствия требованим вакансии">
                    <img
                      src={match}
                      alt="Шкала"
                    />
                  </Tooltip>
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
                <TableCell style={ textBodyStyle }>{item.experience}</TableCell>
                <TableCell style={{ padding: '0' }}>
                  <div style={textHeaderStyle}>{item.lastwork}</div>
                  <div style={{...textBodyStyle, color: '#797981', marginTop: '2px'}}>{item.lastvacancy}</div>
                </TableCell>
                <TableCell>
                  <DropDownTables />
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
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default MyCandidates