import React from 'react';

import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { getStyles } from './styles';

const useStyles = makeStyles(getStyles);

export const CSS1 = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet hendrerit scelerisque. Aenean fringilla nulla non tristique malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus facilisis, sem vitae elementum aliquet, nibh magna blandit nunc, ac porttitor risus ante a augue. Pellentesque habitant morbi.
      </Box>
      <Box className={classes.inner}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum nisl eget nibh condimentum fermentum. Sed pulvinar, magna in tempus sollicitudin, elit libero suscipit quam, in rutrum nisl lorem et orci. Etiam posuere, nisi vel finibus vulputate, nisi elit laoreet mi, et molestie velit urna.
      </Box>
    </Box>
  )
}

