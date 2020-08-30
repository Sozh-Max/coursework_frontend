import React from 'react';
import { NavLink } from 'react-router-dom';

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
          <Box
            component={NavLink}
            className={classes.itemLink}
            to='/HTML'
            activeClassName='selected'
          >
            Форматирование
          </Box>
        </Box>
        <Box
          component='li'
          className={classes.item}
        >
          <Box
            component={NavLink}
            className={classes.itemLink}
            to='/CSS'
            activeClassName='selected'
          >
            CSS
          </Box>
        </Box>
        <Box
          component='li'
          className={classes.item}
        >
          <Box
            component={NavLink}
            className={classes.itemLink}
            to='/JS'
            activeClassName='selected'
          >
            JS
          </Box>
        </Box>
        <Box
          component='li'
          className={classes.item}
        >
          <Box
            component={NavLink}
            className={classes.itemLink}
            to='/Crossword'
            activeClassName='selected'
          >
            Кроссворд
          </Box>
        </Box>
        <Box
          component='li'
          className={classes.item}
        >
          <Box
            component={NavLink}
            className={classes.itemLink}
            to='/Form'
            activeClassName='selected'
          >
            Форма
          </Box>
        </Box>
        <Box
          component='li'
          className={classes.item}
        >
          <Box
            component={NavLink}
            className={classes.itemLink}
            to='/Date'
            activeClassName='selected'
          >
            Даты
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
  