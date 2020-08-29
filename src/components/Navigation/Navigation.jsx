import React from 'react';

import Box from '@material-ui/core/Box';
import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from '@material-ui/core/styles/useTheme';

import { getStyles } from './styles';

const useStyles = makeStyles(getStyles);

export const Navigation = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box
      component='nav'
      className={classes.wrapper}
    >
      <Box
        component='ul'
        className={classes.list}
      >
        <Box
          component='li'
          className={classes.item}
        >
          Форматирование
        </Box>
        <Box
          component='li'
          className={classes.item}
        >
          CSS
        </Box>
        <Box
          component='li'
          className={classes.item}
        >
          JS
        </Box>
        <Box
          component='li'
          className={classes.item}
        >
          Кроссворд
        </Box>
        <Box
          component='li'
          className={classes.item}
        >
          Форма
        </Box>
        <Box
          component='li'
          className={classes.item}
        >
          Даты
        </Box>
      </Box>
    </Box>
  )
}
  