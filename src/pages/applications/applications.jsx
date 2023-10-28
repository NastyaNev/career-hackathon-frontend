import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Popover, Button } from '@mui/material';
import like from '../../images/Like.svg';
import likeFilled from '../../images/like_filled.svg';
import telegram from '../../images/telegram.svg';
import email from '../../images/email.svg';
import kebabMenu from '../../images/kebab-menu.svg';

// Отклики

// Меню кебаб рядом с датой
const KebabButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button onClick={handleClick}>
      <img src={kebabMenu} alt="Три точки" />
      </Button>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <p>Я всплывающее окно</p>
      </Popover>
    </div>
  );
};

function Applications() {

  const [names, setNames] = useState([
    { name: 'Олег Пономарев', age: '43', vacancy: 'Бизнес аналитик', date: '17.10.2023', experience: '1 год', place: 'Москва', where: 'Сбербанк', like: true, photo: 'https://kartinkin.net/uploads/posts/2021-07/1625785184_32-kartinkin-com-p-programmist-art-art-krasivo-34.jpg' },
    { name: 'Зоя Листикова', age: '25', vacancy: 'Графический редактор', date: '16.10.2023', experience: '1 год', place: 'Саратов', where: 'ВТБ', like: false, photo: 'https://kartinkin.net/uploads/posts/2021-07/1625785184_32-kartinkin-com-p-programmist-art-art-krasivo-34.jpg' },
    { name: 'Андрей Герасимов', age: '95', vacancy: 'Бэкенд', date: '21.10.2023', experience: '5 лет', place: 'Саратов', where: 'Сбербанк', like: true, photo: 'https://kartinkin.net/uploads/posts/2021-07/1625785184_32-kartinkin-com-p-programmist-art-art-krasivo-34.jpg' },
    { name: 'Михаил Потапов', age: '18', vacancy: 'Фронтенд', date: '11.10.2023', experience: '1 год', place: 'Москва', where: 'ВТБ', like: false, photo: 'https://kartinkin.net/uploads/posts/2021-07/1625785184_32-kartinkin-com-p-programmist-art-art-krasivo-34.jpg' },
    { name: 'Ольга Сидорина', age: '55', vacancy: 'Тестировщик', date: '10.10.2023', experience: '1 год', place: 'Саратов', where: 'ВТБ', like: false, photo: 'https://kartinkin.net/uploads/posts/2021-07/1625785184_32-kartinkin-com-p-programmist-art-art-krasivo-34.jpg' },
    { name: 'Тимофей Ладушкин', age: '33', vacancy: 'Продуктовый дизайнер', date: '10.10.2023', experience: '4 года', place: 'Москва', like: true, photo: 'https://kartinkin.net/uploads/posts/2021-07/1625785184_32-kartinkin-com-p-programmist-art-art-krasivo-34.jpg' },
    { name: 'Мария Хакимова', age: '19', vacancy: 'Менеджмент проектов', date: '10.10.2023', experience: '1 год', place: 'Саратов', where: 'Сбербанк', like: false, photo: 'https://kartinkin.net/uploads/posts/2021-07/1625785184_32-kartinkin-com-p-programmist-art-art-krasivo-34.jpg' },
    { name: 'Дмитрий Бабушкин', age: '49', vacancy: 'Иллюстратор', date: '26.10.2023', experience: '1 год', place: 'Москва', where: 'ВТБ', like: true, photo: 'https://kartinkin.net/uploads/posts/2021-07/1625785184_32-kartinkin-com-p-programmist-art-art-krasivo-34.jpg' },
    { name: 'Федор Бородинский', age: '37', vacancy: 'Финансовый аналитик', date: '10.10.2023', experience: '11 лет', place: 'Саратов', where: 'Сбербанк', like: false, photo: 'https://kartinkin.net/uploads/posts/2021-07/1625785184_32-kartinkin-com-p-programmist-art-art-krasivo-34.jpg' },
    { name: 'Эдуард Стариков', age: '51', vacancy: 'Фронтенд', date: '05.10.2023', experience: '1 год', place: 'Саратов', where: 'ВТБ', like: true, photo: 'https://kartinkin.net/uploads/posts/2021-07/1625785184_32-kartinkin-com-p-programmist-art-art-krasivo-34.jpg' },
  ]);

  const tableStyle = {
    '& .MuiTableCell-sizeMedium': {
      padding: '0px 8px',
    },
  };

  const textHeaderStyle = {
    color: '#1A1B22',
    fontFamily: 'YS Text',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '48px',
  };

  const textBodyStyle = {
    color: '#1A1B22',
    fontFamily: 'YS Text',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '64px',
    
  };

  const textBodyVacancyStyle = {
    color: '#1D6BF3',
    fontFamily: 'YS Text',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '20px'
  };

  const contactStyle = {
    marginRight: '8px',
  };

  const dataStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  }

  const photoStyle = {
    width: '36px',
    display: 'inline-block',
    verticalAlign: 'middle',
    borderRadius: '50%',
    marginRight: '8px'
  }

  // Обработчик клика по сердцу
  const handleHeartClick = (index) => {
    const updatedNames = [...names];
    updatedNames[index].like = !updatedNames[index].like;
    setNames(updatedNames); // Обновляем состояние
  };

  return (
    <>
      <TableContainer>
        <Table sx={ tableStyle }>
          <TableHead>
            <TableRow>
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
              <TableCell style={{ ...textHeaderStyle, width: '72px' }}>Опыт &#9432;</TableCell>
              <TableCell style={{ ...textHeaderStyle, width: '143px' }}>Локация</TableCell>
              <TableCell style={{ ...textHeaderStyle, width: '231px' }}>Статус</TableCell>
              <TableCell style={{ ...textHeaderStyle, width: '143px' }}>Дата отклика</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {names.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <img
                    src={item.like ? likeFilled : like}
                    alt="Сердце"
                    onClick={() => handleHeartClick(index)}
                  />
                </TableCell>
                <TableCell>
                  <img
                    src={item.like ? likeFilled : like}
                    alt="Сердце"
                    onClick={() => handleHeartClick(index)}
                  />
                </TableCell>
                <TableCell style={ textBodyStyle }>
                  <img
                    src={item.photo}
                    alt="Фото кандидата"
                    style={ photoStyle } // Добавляем отступ между фото и именем
                  />
                  {item.name}
                </TableCell>
                <TableCell>
                  <img
                    style={ contactStyle }
                    src={telegram}
                    alt="Телеграм"
                  />
                  <img
                    src={email}
                    alt="Email"
                  />
                </TableCell>
                <TableCell style={ textBodyVacancyStyle }>{item.vacancy} в {item.where}</TableCell>
                <TableCell style={ textBodyStyle }>{item.experience}</TableCell>
                <TableCell style={ textBodyStyle }>{item.place}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell style={{ ...textBodyStyle, ...dataStyle }}>
                  {item.date}
                  <KebabButton />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Applications;