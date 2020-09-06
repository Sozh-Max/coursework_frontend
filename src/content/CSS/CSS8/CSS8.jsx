import React from 'react';

import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';

import { getStyles } from './styles';

const useStyles = makeStyles(getStyles);

export const CSS8 = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box className={classes.wrapper}>
      <Box data-attribute='name'>Привет</Box>
      <Box data-attribute='start-name'>Привет</Box>
      <Box data-attribute='name-finish'>Привет</Box>
      <Box data-attribute='name-center-name'>Привет</Box>
    </Box>
  )
}