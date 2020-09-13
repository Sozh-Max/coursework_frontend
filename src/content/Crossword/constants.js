import React from 'react';

import Box from '@material-ui/core/Box';

export const crosswordDescription = (
  <Box>
    <Box
      style={{
        fontWeight: 700,
        marginBottom: 8,
        fontSize: 20,
      }}
    >
      Задание для элемента основного меню «Кроссворд»:
    </Box>
    <Box>
      Создать страницу сайта для разгадывания японского кроссворда. Размер кроссворда должен быть не менее 20х30. Предусмотреть следующие возможности:
    </Box>
    <Box
      component='ul'
      style={{
        listStyle: 'circle inside',
        marginBottom: 8,
        marginTop: 8,
      }}
    >
      <Box component='li'>Проверка правильности разгаданного кроссворда</Box>
      <Box component='li'>Очистка всего поля</Box>
      <Box component='li'>Правильный ответ</Box>
    </Box>
    <Box>
      Кроссворд может быть цветным или черно-белым.
    </Box>
  </Box>

);