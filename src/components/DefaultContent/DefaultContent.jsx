import React from 'react';

import Box from '@material-ui/core/Box';
import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from '@material-ui/core/styles/useTheme';

import { getStyles } from './styles';

const useStyles = makeStyles(getStyles);

export const DefaultContent = ({
  description,
  children,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.content}>
        { children }
      </Box>
      <Box className={classes.description}>
        { description }
      </Box>
    </Box>
  )
}