import React from 'react';

import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';

import { getStyles } from './styles';

const useStyles = makeStyles(getStyles);

export const CSS12 = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box className={classes.wrapper}>

      <Box className={classes.element1}>
        Кувырок=)
      </Box>

      <Box className={classes.element2}>
        Zoom
      </Box>

      <Box className={classes.element3}>
        Искажение
      </Box>

      <Box className={classes.element4}>
        Перемещение
      </Box>

      <Box className={classes.element5}>
        Наклон
      </Box>

    </Box>
  )
}