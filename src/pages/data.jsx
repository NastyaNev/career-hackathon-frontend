// это черновик базы

import { useState } from 'react';

const initialNames = [
  { name: 'Олег Пономарев-Фигушкин', age: '43', vacancy: 'Бизнес аналитик', date: '17.10.2023', experience: '1 год', place: 'Москва', where: 'Сбербанк', like: true, state: false, photo: 'https://kartinkin.net/uploads/posts/2021-07/1625785184_32-kartinkin-com-p-programmist-art-art-krasivo-34.jpg', lastwork: 'Озон', lastvacancy: 'Коммуникационный директор' },
  { name: 'Зоя Листикова', age: '25', vacancy: 'Графический редактор', date: '16.10.2023', experience: '1 год', place: 'Саратов', where: 'ВТБ', like: false, state: false, photo: 'https://kartinkin.net/uploads/posts/2021-07/1625785184_32-kartinkin-com-p-programmist-art-art-krasivo-34.jpg', lastwork: 'Озон', lastvacancy: 'Коммуникационный директор' },
  { name: 'Андрей Герасимов', age: '95', vacancy: 'Бэкенд', date: '21.10.2023', experience: '5 лет', place: 'Саратов', where: 'Сбербанк', like: true, state: true, photo: 'https://kartinkin.net/uploads/posts/2021-07/1625785184_32-kartinkin-com-p-programmist-art-art-krasivo-34.jpg', lastwork: 'Озон', lastvacancy: 'Коммуникационный директор' },
  { name: 'Михаил Потапов', age: '18', vacancy: 'Фронтенд', date: '11.10.2023', experience: '1 год', place: 'Москва', where: 'ВТБ', like: false, state: true, photo: 'https://kartinkin.net/uploads/posts/2021-07/1625785184_32-kartinkin-com-p-programmist-art-art-krasivo-34.jpg', lastwork: 'Озон', lastvacancy: 'Коммуникационный директор' },
  { name: 'Ольга Сидорина', age: '55', vacancy: 'Тестировщик', date: '10.10.2023', experience: '1 год', place: 'Саратов', where: 'ВТБ', like: false, state: false, photo: 'https://kartinkin.net/uploads/posts/2021-07/1625785184_32-kartinkin-com-p-programmist-art-art-krasivo-34.jpg', lastwork: 'Озон', lastvacancy: 'Коммуникационный директор' },
  { name: 'Тимофей Ладушкин', age: '33', vacancy: 'Продуктовый дизайнер', date: '10.10.2023', experience: '4 года', place: 'Москва', like: true, state: true, photo: 'https://kartinkin.net/uploads/posts/2021-07/1625785184_32-kartinkin-com-p-programmist-art-art-krasivo-34.jpg', lastwork: 'Озон', lastvacancy: 'Коммуникационный директор' },
  { name: 'Мария Хакимова', age: '19', vacancy: 'Менеджмент проектов', date: '10.10.2023', experience: '1 год', place: 'Саратов', where: 'Сбербанк', like: false, state: false, photo: 'https://kartinkin.net/uploads/posts/2021-07/1625785184_32-kartinkin-com-p-programmist-art-art-krasivo-34.jpg', lastwork: 'Озон', lastvacancy: 'Коммуникационный директор' },
  { name: 'Дмитрий Бабушкин', age: '49', vacancy: 'Иллюстратор', date: '26.10.2023', experience: '1 год', place: 'Москва', where: 'ВТБ', like: true, state: true, photo: 'https://kartinkin.net/uploads/posts/2021-07/1625785184_32-kartinkin-com-p-programmist-art-art-krasivo-34.jpg', lastwork: 'Озон', lastvacancy: 'Коммуникационный директор' },
  { name: 'Федор Бородинский', age: '37', vacancy: 'Финансовый аналитик', date: '10.10.2023', experience: '11 лет', place: 'Саратов', where: 'Сбербанк', like: false, state: true, photo: 'https://kartinkin.net/uploads/posts/2021-07/1625785184_32-kartinkin-com-p-programmist-art-art-krasivo-34.jpg', lastwork: 'Озон', lastvacancy: 'Коммуникационный директор' },
  { name: 'Эдуард Стариков', age: '51', vacancy: 'Фронтенд', date: '05.10.2023', experience: '1 год', place: 'Саратов', where: 'ВТБ', like: true, state: false, photo: 'https://kartinkin.net/uploads/posts/2021-07/1625785184_32-kartinkin-com-p-programmist-art-art-krasivo-34.jpg', lastwork: 'Озон', lastvacancy: 'Коммуникационный директор' },
];

export function useNames() {
  const [names, setNames] = useState(initialNames);
  return [names, setNames];
}
