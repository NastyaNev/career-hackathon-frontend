<p align="center">
  <img src="https://github.com/NastyaNev/career-hackathon-frontend/assets/129982615/127f80c3-121c-4759-964a-f20554723ac2" width="20%" />
</p>

***НАЧАЛО РАБОТЫ:***

Чтобы скачать проект к себе и начать над ним работать:

1. Прислать лиду свой ник на github-е, чтобы тебя добавили в соавторы проекта.
2. Клонировать репозиторий `git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY`. Ссылка на репо в зеленой кнопочке "Code".
![Alt text](image.png)
3. Установить зависимости из package.json
   ```console
   npm install
   ```
4. Запустить проект локально
   ```console
   npm start
   ```.

***ПРАВИЛА РАБОТЫ:***

* Работаем в отдельных ветках, чтобы не мешать друг другу.
* Выполняем только свою задачу! Если ты, например, верстаешь кнопки, тебе кажется, что нужно поправить верстку всей страницы, уточни, не работает ли над этим кто-то другой!
* Когда работа в твоей ветке готова, замерджи ее в main. Пока что будем мерджить без pull request-ов. Если при мержде возникают конфликты, не затирай чужой код!
* Прежде, чем создать новую ветку, не забудь запулить все изменения из main к себе ```git pull```.
* Все компоненты берем из MUI и кастомизируем согласно макету от дизайнеров и UI-kit.
* Стараемся писать сразу на TS!
* Лучше не повторять стили для разных элементов, а импортить из других компонентов и делать микс классов. Пример

![Alt text](image-1.png)

В примере в jsx файл компонента импортированы стили самого компонента
```jsx
import styles from "./app-header.module.css";
```
Импортированы нужные стили из другого компонента
```jsx
import stylesLayout from "../layout/layout.module.css";
```
И из нужных классов сделан микс
```html
<div className={`${styles.header_content} ${stylesLayout.page}`}>
```

***ЧТО СДЕЛАНО:***

* Установлены библиотеки:
1. React
2. Redux
3. Toolkit
4. MUI
5. react-router-dom

* Установлены шрифты.

В качестве основного дизайнерами выбран пакет шрифтов YS из кита. В качестве основного для всего приложения установлен шрифт YS Display, но обратите внимание, что в том наборе есть еще шрифт YS Text. Последний также подключен к проекту, но не в качестве основного.

В файле fonts.css сделаны заготовки классов для стилей шрифтов, чтобы их также не дублировать и делать микс.

![Alt text](image-2.png)

Класс выглядит так: .d_medium_it

Первая буква - это либо шрифт Display (d_), либо Text (t_);
Второе слово - это толщина шрифта, может быть bold, medium, thin, regular, light;
Сочетание _it добавляется, если требуется шрифт Italic;

По умолчанию установлен шрифт YSDisplay-Regular.

* Сверстана шапка обзая для всех страниц.
* Сделан роутинг на 3 основные страницы.
