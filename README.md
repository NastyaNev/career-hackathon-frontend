 <p align="center">
  <b align="center" >Добро пожаловать в репозиторий самого лучшего, хоть и немного недоделанного, сервиса по подбору сотрудников из числа выпоскников Яндекс.Практикума!</b>
 </p>
 <p align="center">
  <b align="center" >Demo опубликавано на GitHub-pages - <a href="https://nastyanev.github.io/career-hackathon-frontend/" title="Ссылка на GitHub Pages">ссылка</a>.</b>
 </p>
<p align="center">
  <img src="https://github.com/NastyaNev/career-hackathon-frontend/assets/129982615/127f80c3-121c-4759-964a-f20554723ac2" width="20%" />
</p>

***НАЧАЛО РАБОТЫ:***

Чтобы запустить проект локально:

1. Клонировать репозиторий
   ```console
   git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
   ```

   Ссылка на репо в зеленой кнопочке "Code".
<img src="image.png" width="60%" />

2. Установить зависимости из package.json
   ```console
   npm install --legacy-peer-deps
   ```

  ВАЖНО!!! Зависимостри всгда устанавливаем с ключем
  ```console
  --legacy-peer-deps
  ```
  НАПРИМЕР при установке зависимостей
  ```console
   npm install --legacy-peer-deps
   ```


3. Запустить проект локально
   ```console
   npm start
   ```

4. Задеплоить проект
 ```console
    npm tun deploy
    ```     
***ПРАВИЛА РАБОТЫ:***

* Работаем в **отдельных ветках**, чтобы не мешать друг другу.
  
* Выполняем только **свою задачу**! Если ты, например, верстаешь кнопки, тебе кажется, что нужно поправить верстку всей страницы, уточни, не работает ли над этим кто-то другой!
  
* Когда работа в твоей ветке готова, замерджи ее в main. Пока что будем мерджить без pull request-ов. Если при мержде возникают конфликты, **не затирай чужой код**!
  
* Прежде чем создать новую ветку, не забудь **запулить** все изменения из main к себе
  ```console
  git pull
  ```
  
* Все **компоненты берем из MUI** и кастомизируем согласно макету от дизайнеров и UI-kit.
  
* Стараемся писать сразу **на TS**!
  
* Лучше **не повторять стили** для разных элементов, а импортить из других компонентов и делать микс классов. Пример :point_down:
<img src="image-1.png" width="60%" />

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

* Установлены библиотеки:<br />
  &nbsp;&nbsp;&nbsp;&nbsp;1. React<br />
  &nbsp;&nbsp;&nbsp;&nbsp;2. Redux<br />
  &nbsp;&nbsp;&nbsp;&nbsp;3. Toolkit<br />
  &nbsp;&nbsp;&nbsp;&nbsp;4. MUI<br />
  &nbsp;&nbsp;&nbsp;&nbsp;5. react-router-dom

  &nbsp;&nbsp;&nbsp;&nbsp;5. Установлен TypeScript<br />

**Дополнительно:**
 
  &nbsp;&nbsp;&nbsp;&nbsp;5. Установлена библиотека <a href="https://www.npmjs.com/package/react-elastic-carousel" title="Ссылка на GitHub Pages">react-elastic-carousel</a> для создания каруселей-слайдеров на главной странице. Это было не лучшим решением, поскольку библиотека написана для более ранней версии React-а, но когда это обнаружилось, работа была уже почти сделана)).
  
  

