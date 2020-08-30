import React from 'react';

import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


export const HTML5 = () => {

  return (
    <Box>
        <Table
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell> Заголовок 1 </TableCell>
              <TableCell> Заголовок 2 </TableCell>
              <TableCell> Заголовок 3 </TableCell>
              <TableCell> Заголовок 4 </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell> Текст </TableCell>
              <TableCell> Текст </TableCell>
              <TableCell rowspan='2'> Объединили ряды </TableCell>
              <TableCell> Текст </TableCell>
            </TableRow>
            <TableRow>
              <TableCell> Текст </TableCell>
              <TableCell> Текст </TableCell>
              <TableCell> Текст </TableCell>
            </TableRow>
            <TableRow>
              <TableCell> Текст </TableCell>
              <TableCell colspan='2'> Объединили колонки </TableCell>
              <TableCell> Текст </TableCell>
            </TableRow>
          </TableBody>
        </Table>
    </Box>
  )
}

