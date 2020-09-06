import React from 'react';

import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { getStyles } from './styles';

const useStyles = makeStyles(getStyles);

export const CSS2 = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box>
      <Box className={classes.nb}></Box>
      <Box>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales eleifend fermentum. Morbi ante ex, elementum in fringilla in, porta eget nulla. Nulla egestas volutpat luctus. Etiam et fringilla nisl. Mauris turpis leo, euismod eget mauris sit amet, posuere malesuada ligula. Mauris fringilla blandit neque, eget eleifend arcu scelerisque sit amet. Curabitur eget pulvinar orci. Mauris quam purus, ultrices id felis a, bibendum malesuada ipsum. Vivamus nisi odio, interdum ut eros lobortis, fermentum ullamcorper felis. Proin sapien lectus, ornare pulvinar lectus sed, rutrum venenatis sem. Quisque ac turpis ut odio rutrum imperdiet. Integer pharetra maximus elit. Aenean lobortis sit amet turpis auctor tempor. Cras nec consequat sapien, non posuere sem. Pellentesque auctor quis mauris mattis egestas. In erat est, venenatis feugiat neque eget, viverra dapibus dolor.

        Donec non odio libero. Curabitur euismod leo ipsum, ut egestas elit imperdiet dignissim. Aliquam erat volutpat. Aenean vel nisi at justo interdum lacinia non quis lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc vestibulum massa eget tincidunt suscipit. Nulla rutrum urna quis eleifend imperdiet. Donec tristique neque eu ex consequat laoreet.

        Aenean aliquam justo eget hendrerit pharetra. Nunc laoreet dapibus est a ultrices. In id feugiat metus. Maecenas porttitor cursus ullamcorper. Praesent rutrum purus a enim luctus, et blandit tortor elementum. Sed mattis elit eget mollis venenatis. Nam vel sapien quam.

        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc in lectus ac mauris accumsan commodo. Aliquam erat volutpat. Quisque sodales dolor vel molestie vehicula. Quisque diam lacus, fermentum vitae sapien et, porttitor lacinia nunc. Nullam dui est, convallis ac lobortis dignissim, ultrices in lectus. Vestibulum a semper metus, id cursus turpis. Duis pellentesque porttitor risus, eleifend laoreet mi. Sed ut nunc sapien. Suspendisse potenti. Vivamus ullamcorper vulputate feugiat. Mauris sit amet justo finibus, vulputate orci in, fermentum ipsum. Nullam egestas mauris non elementum varius. Curabitur dui sapien, fermentum vel lacus in, mollis tristique mi.

        Mauris sollicitudin eu nisl a pharetra. Aliquam ac ligula at odio cursus ornare. Nullam molestie eleifend eros, eget egestas odio pellentesque ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris porttitor id elit non commodo. Nunc in faucibus velit, vel placerat odio. Aenean cursus libero augue, vel gravida sem consectetur sed. Praesent feugiat tincidunt nisi, quis venenatis nunc tristique eget. Mauris et ultrices urna. Mauris ut ligula vel odio suscipit imperdiet a non nibh. Integer eu convallis nunc. Proin velit nisl, pulvinar eget interdum et, fringilla eu arcu. Phasellus facilisis turpis orci, eget commodo est dictum venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Box>
    </Box>
  )
}

