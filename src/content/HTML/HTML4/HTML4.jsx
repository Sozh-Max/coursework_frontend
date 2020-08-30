import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import useTheme from '@material-ui/core/styles/useTheme';

import { getStyles } from './styles';

const useStyles = makeStyles(getStyles);

export const HTML4 = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box>
        <Table
          className={classes.table}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell className={classes.item}> Заголовок 1 </TableCell>
              <TableCell className={classes.item}> Заголовок 2 </TableCell>
              <TableCell className={classes.item}> Заголовок 3 </TableCell>
              <TableCell className={classes.item}> Заголовок 4 </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className={classes.item}> Текст </TableCell>
              <TableCell className={classes.item}> Текст </TableCell>
              <TableCell className={classes.item} rowspan='2'> Объединили ряды </TableCell>
              <TableCell className={classes.item}> Текст </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.item}> Текст </TableCell>
              <TableCell className={classes.item}> Текст </TableCell>
              <TableCell className={classes.item}> Текст </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.item}> Текст </TableCell>
              <TableCell colspan='2' className={classes.item}> Объединили колонки </TableCell>
              <TableCell className={classes.item}> Текст </TableCell>
            </TableRow>
          </TableBody>
        </Table>
    </Box>
  )
}

