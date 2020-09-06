import React from 'react';

import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';

import { getStyles } from './styles';

const useStyles = makeStyles(getStyles);

export const CSS7 = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box>
      <Box className={classes.textDots}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales eleifend fermentum. Morbi ante ex, elementum in fringilla in, porta eget nulla. Nulla egestas volutpat luctus. Etiam et fringilla nisl. Mauris turpis leo, euismod eget mauris sit amet, posuere malesuada ligula. Mauris fringilla blandit neque, eget eleifend arcu scelerisque sit amet. Curabitur eget pulvinar orci. Mauris quam purus, ultrices id felis a, bibendum malesuada ipsum. Vivamus nisi odio, interdum ut eros lobortis, fermentum ullamcorper felis. Proin sapien lectus, ornare pulvinar lectus sed, rutrum venenatis sem. Quisque ac turpis ut odio rutrum imperdiet. Integer pharetra maximus elit. Aenean lobortis sit amet turpis auctor tempor. Cras nec consequat sapien, non posuere sem. Pellentesque auctor quis mauris mattis egestas. In erat est, venenatis feugiat neque eget, viverra dapibus dolor.
      </Box>
      <Box className={classes.textContainer}>
        <Box className={classes.text}>
          Donec non odio libero. Curabitur euismod leo ipsum, ut egestas elit imperdiet dignissim. Aliquam erat volutpat. Aenean vel nisi at justo interdum lacinia non quis lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc vestibulum massa eget tincidunt suscipit. Nulla rutrum urna quis eleifend imperdiet. Donec tristique neque eu ex consequat laoreet.
        </Box>
        <Box className={classes.text}>
          Aenean aliquam justo eget hendrerit pharetra. Nunc laoreet dapibus est a ultrices. In id feugiat metus. Maecenas porttitor cursus ullamcorper. Praesent rutrum purus a enim luctus, et blandit tortor elementum. Sed mattis elit eget mollis venenatis. Nam vel sapien quam.
        </Box>
      </Box>
    </Box>
  )
}