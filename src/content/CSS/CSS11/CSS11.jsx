import React from 'react';

import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';

import image from '../../../img/joker.jpg';

import { getStyles } from './styles';

const useStyles = makeStyles(getStyles);

export const CSS11 = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box className={classes.wrapper}>

      <Box className={classes.text1}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate nisi non semper hendrerit. Sed aliquam lobortis urna, at iaculis felis posuere id. Etiam quis sodales libero, a tristique massa. Nam posuere consectetur porta. Nunc ac est id diam convallis porttitor sit amet vitae magna. Maecenas eu felis quis nulla.
      </Box>

      <Box className={classes.text2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate nisi non semper hendrerit. Sed aliquam lobortis urna, at iaculis felis posuere id. Etiam quis sodales libero, a tristique massa. Nam posuere consectetur porta. Nunc ac est id diam convallis porttitor sit amet vitae magna. Maecenas eu felis quis nulla.
      </Box>

      <Box className={classes.blockContainer}>

        <Box className={classes.block}>
          <Box className={classes.title}>
            Original
          </Box>
          <img
            src={image}
            className={classes.image}
            alt="img"
          />
        </Box>

        <Box className={classes.block}>
          <Box className={classes.title}>
            Opacity 50%
          </Box>
          <img
            src={image}
            className={classes.imageOpacity}
            alt="img"
          />
        </Box>

        <Box className={classes.block}>
          <Box className={classes.title}>
            Invert 100%
          </Box>
          <img
            src={image}
            className={classes.imageInvert}
            alt="img"
          />
        </Box>

        <Box className={classes.block}>
          <Box className={classes.title}>
            Sepia 100%
          </Box>
          <img
            src={image}
            className={classes.imageSepia}
            alt="img"
          />
        </Box>

        <Box className={classes.block}>
          <Box className={classes.title}>
            Grayscale 100%
          </Box>
          <img
            src={image}
            className={classes.imageGrayscale}
            alt="img"
          />
        </Box>

      </Box>

    </Box>
  )
}