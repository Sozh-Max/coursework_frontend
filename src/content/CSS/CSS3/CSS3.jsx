import React from 'react';

import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { getStyles } from './styles';

const useStyles = makeStyles(getStyles);

export const CSS3 = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box>
      <Box className={classes.paragraph}>
        Donec non odio libero. Curabitur euismod leo ipsum, ut egestas elit imperdiet dignissim. Aliquam erat volutpat. Aenean vel nisi at justo interdum lacinia non quis lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc vestibulum massa eget tincidunt suscipit. Nulla rutrum urna quis eleifend imperdiet. Donec tristique neque eu ex consequat laoreet.
      </Box>
      <Box className={classes.paragraph}>
        Donec non odio libero. Curabitur euismod leo ipsum, ut egestas elit imperdiet dignissim. Aliquam erat volutpat. Aenean vel nisi at justo interdum lacinia non quis lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc vestibulum massa eget tincidunt suscipit. Nulla rutrum urna quis eleifend imperdiet. Donec tristique neque eu ex consequat laoreet.
      </Box>
      <Box className={classes.paragraph}>
        Donec non odio libero. Curabitur euismod leo ipsum, ut egestas elit imperdiet dignissim. Aliquam erat volutpat. Aenean vel nisi at justo interdum lacinia non quis lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc vestibulum massa eget tincidunt suscipit. Nulla rutrum urna quis eleifend imperdiet. Donec tristique neque eu ex consequat laoreet.
      </Box>
      <Box className={classes.paragraph}>
        Donec non odio libero. Curabitur euismod leo ipsum, ut egestas elit imperdiet dignissim. Aliquam erat volutpat. Aenean vel nisi at justo interdum lacinia non quis lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc vestibulum massa eget tincidunt suscipit. Nulla rutrum urna quis eleifend imperdiet. Donec tristique neque eu ex consequat laoreet.
      </Box>
    </Box>
  )
}

