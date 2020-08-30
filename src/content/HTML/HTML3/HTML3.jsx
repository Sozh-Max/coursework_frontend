import React from 'react';

import Box from '@material-ui/core/Box';

export const HTML3 = () => (
  <Box>
    <Box component='ul'>
      <Box component='li'>Номер 1</Box>
      <Box component='li'>Номер 2</Box>
      <Box component='li'>Номер 3</Box>
    </Box>
    <Box component='ol'>
      <Box component='li'>Не нумерованный первый лист</Box>
      <Box component='li'>Не нумерованный второй лист</Box>
      <Box component='li'>Не нумерованный третий лист</Box>
    </Box>
    <Box component='dl'>
      <Box component='dt'>Термин 1</Box>
      <Box component='dd'>Определение термина 1</Box>
      <Box component='dt'>Термин 2</Box>
      <Box component='dd'>Определение термина 2</Box>
      <Box component='dt'>Термин 3</Box>
      <Box component='dd'>Определение термина 3</Box>
    </Box>
  </Box>
)

