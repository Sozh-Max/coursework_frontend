import React from 'react';

import Box from '@material-ui/core/Box';
import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from '@material-ui/core/styles/useTheme';

import { Logo } from '../Logo';

import { getStyles } from './styles';

const useStyles = makeStyles(getStyles);

export const Header = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box
      component='header'
      className={classes.wrapper}
    >
      <Logo />
      <Box className={classes.title}>
        Казаченко Максим Михайлович
      </Box>
    </Box>
  )
}
  