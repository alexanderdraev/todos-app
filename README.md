# Notes App


## Installation

Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.

It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your machine. To create a project, run:

```bash
npx create-react-app my-app
cd my-app
npm start

```

## Requirements
Студентите разработват самостоятелен курсов проект в рамките на триместъра. Изискванията за проекта са както следва:

Да се създаде приложение с ReactJS, което да има следната функционалност:

1. Автентикация:
 - регистрация, при която потребителят by default няма администраторски права
 - потребител може да влезе в системата с потребителско име и парола
 - потребителите могат да бъдат или да не бъдат администратори

2. Управление на потребители
 - администраторите могат да добавят, редактират, изтриват и преглеждат потребителите в системата, както и да дават администраторски права на съществуващи потребители
 - при изтриване на даден потребител, всички негови задачи също трябва да бъдат изтрити ( Cascade Deletion )

3. Управление на задачи
 - всеки потребител може да създава, изтрива, редактира и преглежда задачи
 - задачата се състои от: заглавие; описание; оценка (време в часове); 
 - статут на задачата (приключена, чакаща изпълнение). 
 - редакцията/изтриването на задачите става по следният начин 
   - администраторът може да изтрива/променя всички задачи, а потребителят - само тези, които той е създал

Приложението да се реализира със следните детайли
 - LocalStorage като база данни
 - React Routing за навигация между компонентите

Използвайте версия на пакетите по ваш избор. 
При завършен проект изпратете линк към гитхъб репозитори или архив на проекта ( без node_modules ) на мейл ivanov.todor1@gmail.com до края на 9та седмица. 

Ако имате някакви въпроси, пишете ми на мейл ivanov.todor1@gmail.com

Начин на оценяване
В десетата седмица на сесията се провежда защита на курсовите проекти на студентите. Защитата включва обяснения на отделни компоненти от създаването на проектите, както и дописване/поправяне на функционалност, която е пропусната. Оценява се по шестобална система, като създаването на проекта носи 30% от крайната оценка, а защитата му – 70%. При получена оценка слаб 2 на защитата, крайната оценка на студента е слаб 2.

Неполучилите положителна оценка се явяват на поправителен изпит, на който се дава втора възможност за защита на проект. Оценката от създаването на курсовия проект от предишни явявания се съхранява.

Ако и на поправката студентът не събере необходимата минимална оценка се явява на ликвидационен изпит като на ликвидацията не се запазват оценки от предишни явявания. Тогава се зачита само резултатът от самия ликвидационен изпит, като оценяването става само върху разработка на малко приложение.

## License
[Docs](https://docs.google.com/document/d/1jpIJo9LBsPsH5L2QzlfYQ_yry_EU3Nrn6l05ZR4jV_E/edit)