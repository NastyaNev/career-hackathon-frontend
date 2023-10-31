// это черновик базы

import { useState } from 'react';

let initialNames = [
  { name: 'Олег Пономарев-Фигушкин', age: '43', vacancy: 'Бизнес аналитик', date: '17.10.2023', experience: '1 год', place: 'Москва', where: 'Сбербанк', like: true, state: false, photo: 'https://gas-kvas.com/uploads/posts/2023-02/1676715961_gas-kvas-com-p-detskie-risunki-malchishek-22.png', lastwork: 'Озон', lastvacancy: 'Коммуникационный директор', status: "Новый" },
  { name: 'Зоя Листикова', age: '25', vacancy: 'Графический редактор', date: '16.10.2023', experience: '1 год', place: 'Саратов', where: 'ВТБ', like: false, state: false, photo: 'https://gas-kvas.com/uploads/posts/2023-03/1677674478_gas-kvas-com-p-risunki-detskie-devochek-legko-13.jpg', lastwork: 'Озон', lastvacancy: 'Коммуникационный директор', status: "Отказ" },
  { name: 'Андрей Герасимов', age: '95', vacancy: 'Бэкенд', date: '21.10.2023', experience: '5 лет', place: 'Саратов', where: 'Сбербанк', like: true, state: true, photo: 'https://papik.pro/uploads/posts/2023-03/1678832832_papik-pro-p-risunok-malchika-bolshogo-12.jpg', lastwork: 'Озон', lastvacancy: 'Коммуникационный директор', status: "На рассмотрении" },
  { name: 'Михаил Потапов', age: '18', vacancy: 'Фронтенд', date: '11.10.2023', experience: '1 год', place: 'Москва', where: 'ВТБ', like: false, state: true, photo: 'https://gas-kvas.com/uploads/posts/2023-02/1676439278_gas-kvas-com-p-detskii-risunok-brat-7.jpg', lastwork: 'Озон', lastvacancy: 'Коммуникационный директор', status: "Интервью" },
  { name: 'Ольга Сидорина', age: '55', vacancy: 'Тестировщик', date: '10.10.2023', experience: '1 год', place: 'Саратов', where: 'ВТБ', like: false, state: false, photo: 'https://babyimages.ru/kartinki/devochka-kartinka-04.jpg', lastwork: 'Озон', lastvacancy: 'Коммуникационный директор', status: "Новый" },
  { name: 'Тимофей Ладушкин', age: '33', vacancy: 'Продуктовый дизайнер', date: '10.10.2023', experience: '4 года', place: 'Москва', like: true, state: true, photo: 'https://gas-kvas.com/uploads/posts/2023-02/1676715917_gas-kvas-com-p-detskie-risunki-malchishek-5.jpg', lastwork: 'Озон', lastvacancy: 'Коммуникационный директор', status: "На рассмотрении" },
  { name: 'Мария Хакимова', age: '19', vacancy: 'Менеджмент проектов', date: '10.10.2023', experience: '1 год', place: 'Саратов', where: 'Сбербанк', like: false, state: false, photo: 'https://sun6-21.userapi.com/s/v1/if1/UTV4xAom0CiopeWLuYh521-T4VLbT1oHnQW6vLtBRbTezhdl-sHV606r6-EDd7h-d4vb3LpW.jpg?size=1789x1789&quality=96&crop=250,75,1789,1789&ava=1', lastwork: 'Озон', lastvacancy: 'Коммуникационный директор', status: "Новый" },
  { name: 'Дмитрий Бабушкин', age: '49', vacancy: 'Иллюстратор', date: '26.10.2023', experience: '1 год', place: 'Москва', where: 'ВТБ', like: true, state: true, photo: 'https://prikolnye-kartinki.ru/img/picture/Aug/20/54e0399a32d90da33e10f049959e3331/1.jpg', lastwork: 'Озон', lastvacancy: 'Коммуникационный директор', status: "Новый" },
  { name: 'Федор Бородинский', age: '37', vacancy: 'Финансовый аналитик', date: '10.10.2023', experience: '11 лет', place: 'Саратов', where: 'Сбербанк', like: false, state: true, photo: 'https://papik.pro/uploads/posts/2021-11/1636037945_4-papik-pro-p-malchik-vektornii-risunok-4.jpg', lastwork: 'Озон', lastvacancy: 'Коммуникационный директор', status: "Новый" },
  { name: 'Эдуард Стариков', age: '51', vacancy: 'Фронтенд', date: '05.10.2023', experience: '1 год', place: 'Саратов', where: 'ВТБ', like: true, state: false, photo: 'https://gas-kvas.com/uploads/posts/2023-02/1676715905_gas-kvas-com-p-detskie-risunki-malchishek-1.jpg', lastwork: 'Озон', lastvacancy: 'Коммуникационный директор', status: "На рассмотрении" },
];

export function useNames() {
  const [names, setNames] = useState(initialNames);
  return [names, setNames];
}
