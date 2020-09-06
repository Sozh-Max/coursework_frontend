import React from 'react';
import parse from 'html-react-parser';

import Box from '@material-ui/core/Box';

export const HTML5 = () => (
  <Box>
    {parse(`
      <plaintext>
        <table aria-label="simple table">
          <thead>
            <tr>
              <th> Заголовок 1 </th>
              <th> Заголовок 2 </th>
              <th> Заголовок 3 </th>
              <th> Заголовок 4 </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> Текст </td>
              <td> Текст </td>
              <td rowspan='2'> Объединили ряды </td>
              <td> Текст </td>
            </tr>
            <tr>
              <td> Текст </td>
              <td> Текст </td>
              <td> Текст </td>
            </tr>
            <tr>
              <td> Текст </td>
              <td colspan='2'> Объединили колонки </td>
              <td> Текст </td>
            </tr>
          </tbody>
        </table>
      </plaintext>
    `)}
  </Box>
  )

