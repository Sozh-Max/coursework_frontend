import React from 'react';

import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { getStyles } from './styles';

const useStyles = makeStyles(getStyles);

export const CSS4 = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.poster}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales eleifend fermentum. Morbi ante ex, elementum in fringilla in, porta eget nulla. Nulla egestas volutpat luctus. Etiam et fringilla nisl. Mauris turpis leo, euismod eget mauris sit amet, posuere malesuada ligula. Mauris fringilla blandit neque, eget eleifend arcu scelerisque sit amet. Curabitur eget pulvinar orci. Mauris quam purus, ultrices id felis a, bibendum malesuada ipsum. Vivamus nisi odio, interdum ut eros lobortis, fermentum ullamcorper felis. Proin sapien lectus, ornare pulvinar lectus sed, rutrum venenatis sem. Quisque ac turpis ut odio rutrum imperdiet. Integer pharetra maximus elit. Aenean lobortis sit amet turpis auctor tempor. Cras nec consequat sapien, non posuere sem. Pellentesque auctor quis mauris mattis egestas. In erat est, venenatis feugiat neque eget, viverra dapibus dolor.
      </Box>
      <Box className={classes.ground}>Ground</Box>
    </Box>
  )
}