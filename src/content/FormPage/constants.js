import React from 'react';

import Box from '@material-ui/core/Box';

export const formPageDescription = (
  <Box>
    <Box>
      1. Разработать форму для ввода данных согласно заданной предметной области. Поля формы должны быть сгруппированы. Форма должна содержать следующие элементы:
    </Box>
    <Box
      component='ul'
      style={{
        listStyle: 'circle inside',
        marginBottom: 8,
        marginTop: 8,
      }}
    >
      <Box component='li'>текстовые поля</Box>
      <Box component='li'>флажки</Box>
      <Box component='li'>переключатели</Box>
      <Box component='li'>списки</Box>
      <Box component='li'>различные виды кнопок</Box>
      <Box component='li'>текст-заместитель</Box>
      <Box component='li'>отключить автозавершение для отдельных полей</Box>
      <Box component='li'>атрибут list и связанный с ним элемент datalist</Box>
      <Box component='li'>поле для ввода e-mail</Box>
      <Box component='li'>поле ввода числа number c указанием диапазона и шага приращения</Box>
      <Box component='li'>поле ввода url</Box>
      <Box component='li'>поле ввода телефона</Box>
      <Box component='li'>поле поиска</Box>
      <Box component='li'>поле ввода данных по шаблону</Box>
      <Box component='li'>поле ввода даты</Box>
      <Box component='li'>ползунок с отображением выбранного значения</Box>
    </Box>
    <Box>
      2. При открытии формы предусмотреть установку фокуса на первое поле.
    </Box>
    <Box>
      3. Форма должна содержать обязательные и необязательные поля. Обязательные поля должны быть выделены с использованием свойств CSS.
    </Box>
    <Box>
      4. При вводе элементов формы предусмотреть проверку заполнения обязательных полей.
    </Box>
    <Box>
      5. Введенные данные должны отображаться на данной странице в виде динамически создаваемой таблицы по нажатии кнопки «Отправить».
    </Box>
    <Box>
      6. Для отображения таблицы с формой использовать метод document.myForm.insertAdjacentHTML ("afterEnd", вставляемая строка содержащая таблицу);
    </Box>
    <Box>
      7. Предусмотреть возможность удаления данных из результирующей таблицы.
    </Box>
  </Box>
);

export const cathedraList = [
  {
    id: 1,
    value: 'Математика',
  },
  {
    id: 2,
    value: 'Программирование',
  },
  {
    id: 3,
    value: 'Гуманитарные науки',
  },
  {
    id: 4,
    value: 'Лингвистика',
  },
]
