import React from 'react';

import Box from '@material-ui/core/Box';
import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from '@material-ui/core/styles/useTheme';

import { Navigation } from '../Navigation';

import { getStyles } from './styles';

const useStyles = makeStyles(getStyles);

export const Main = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box
      component='main'
      className={classes.wrapper}
    >
      <Navigation />
    </Box>
  )
}
  