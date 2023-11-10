# Sensors-Monitor

ЗАПУСК ПРИЛОЖЕНИЯ Sensors-Monitor
Стэк: Java, Angular, Nrgx, JWT, Spring(Boot,Security,Web,Actuator), Hibernate, Geadle, PostgreSQL

Front-end
1. Нужно скачать проект с гита https://github.com/Neolollila/sensor-monitor-front и https://github.com/Neolollila/sensor-monitor-back
2. Для работы с Angular необходимо установить сервер Node.js и пакетный менеджер npm, для компиляции приложения установить Angular CLI(если ранее не были установленны)
3. Открыть sensors-monitor-front в WebStorm/VSCode или других средах разработки к которым вы привыкли.
4. Запустить приложение написав в командной строке ng serve.

Back-end
1. Нужно скачать проект с гита https://github.com/Neolollila/Sensors-Monitor
2. Открыть sensors-monitor-back в Intellij Idea
3. Подключение БД к приложению: 
  1) Используя PgAdmin создать БД для приложения 
  2) Или установив Docker Desktop и выполнив команду docker run --name sensors-monitor -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres .Запустить контейнер с postgresql.
  3) Подключить в Inteliij Idea БД со следующими настройками: 
   User: postgres
   Password: postgres
   Database: postgres (или другое название БД, которое вы создали)
   URL: jdbc:postgresql://localhost:5432/postgres
4. Успешно подключив БД нужно выполнить SQL script из папки resources/script. Сначала выполняем create.sql (создаём структуру БД),а затем insert.sql (заполняем таблицы данными)
5. Наконец-то запускаем наше приложения с помощью класса SensorsMonitorApplication.

Если всё выполнили правильно:
1. Tо перейдя по ссылке http://localhost:4200/ вас перекинет на http://localhost:4200/login для аутентификации. 
В приложении будут доступны два пользователя: (1) Username: Alex11 Password: 12345678 Role: VIEWER (2) Username: Artsiom Password: 1234Art Role: ADMINISTRATOR

  <img width="586" alt="image" src="https://github.com/Neolollila/Sensors-Monitor/assets/87725355/e88b3898-74bb-447d-b6fc-0363f673bee8">

2. Также можете создать нового пользователя http://localhost:4200/registration, у него будет по стандарту роль VIEWER с ограниченными правами на сайте, вы можете изменить его роль на ADMINISTRATOR в БД.

  <img width="581" alt="image" src="https://github.com/Neolollila/Sensors-Monitor/assets/87725355/4178fc59-ec19-430a-a2d7-0b8522a6f02d">

3. Если вы зашли в аккаунт пользователя с ролью VIEWER, то вам будет доступно три секции Home, User(со списком пользователей) и Sensors. На Странице с Sensors вы сможете только посмотреть все существующие в БД Sensors или получить определнные Sensors используя поиск по всем полям данной сущности.

  <img width="954" alt="image" src="https://github.com/Neolollila/Sensors-Monitor/assets/87725355/63b65e5c-4991-4411-816a-e5b0b04e908b">
  <img width="953" alt="image" src="https://github.com/Neolollila/Sensors-Monitor/assets/87725355/674526b2-6cc7-4fd2-8cac-96266ac83f1c">
  <img width="885" alt="image" src="https://github.com/Neolollila/Sensors-Monitor/assets/87725355/bf901c24-5e8c-4041-883d-a005675c6622">

4. Если вы зашли в аккаунт пользователя с ролью VIEWER, то вам будет доступно также три секции Home, User(со списком пользователей) и Sensors. На Странице с Sensors вы сможете посмотреть все существующие в БД Sensors, изменить существующие, удалять и добавлять новые Sensors, также можете получить определнные Sensors используя поиск по всем полям данной сущности. Также при добавлении, изменении Sensora, добавлении Usera и входе в аккаунт присутствует валидация, поэтому вы сразу узнаете если сделали что-то не так.

   <img width="945" alt="image" src="https://github.com/Neolollila/Sensors-Monitor/assets/87725355/044b6a43-ff84-445a-8102-b1d975da8ad4">
   <img width="898" alt="image" src="https://github.com/Neolollila/Sensors-Monitor/assets/87725355/138cbfd3-17e3-4690-957d-4b2e49e702b2">
   <img width="905" alt="image" src="https://github.com/Neolollila/Sensors-Monitor/assets/87725355/cb305c7e-65d6-49ed-9a89-4bdee87c395f">


Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
