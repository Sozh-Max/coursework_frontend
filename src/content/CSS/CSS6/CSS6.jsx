import React from 'react';

import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';

import { getStyles } from './styles';

const useStyles = makeStyles(getStyles);

export const CSS6 = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.blockScroll}>
        Donec non odio libero. Curabitur euismod leo ipsum, ut egestas elit imperdiet dignissim. Aliquam erat volutpat. Aenean vel nisi at justo interdum lacinia non quis lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc vestibulum massa eget tincidunt suscipit. Nulla rutrum urna quis eleifend imperdiet. Donec tristique neque eu ex consequat laoreet.
      </Box>
      <Box className={classes.blockScroll}>
        Aenean aliquam justo eget hendrerit pharetra. Nunc laoreet dapibus est a ultrices. In id feugiat metus. Maecenas porttitor cursus ullamcorper. Praesent rutrum purus a enim luctus, et blandit tortor elementum. Sed mattis elit eget mollis venenatis. Nam vel sapien quam. Aenean aliquam justo eget hendrerit pharetra. Nunc laoreet dapibus est a ultrices. In id feugiat metus. Maecenas porttitor cursus ullamcorper. Praesent rutrum purus a enim luctus, et blandit tortor elementum. Sed mattis elit eget mollis venenatis. Nam vel sapien quam.
      </Box>
    </Box>
  )
}