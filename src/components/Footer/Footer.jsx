import React from 'react';

import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from '@material-ui/core/styles/useTheme';

import { getStyles } from './styles';

const useStyles = makeStyles(getStyles);

export const Footer = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box
      component='footer'
      className={classes.wrapper}
    >
      <Box>
        © All rights reserved
      </Box>
      <Box>
        <Link
          href='mailto:sozh.max@gmail.com'
        >
          sozh.max@gmail.com
        </Link>
      </Box>
    </Box>
  )
}
  