import React from 'react';
import ImageMapper from 'react-image-mapper';

import Box from '@material-ui/core/Box';
import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from '@material-ui/core/styles/useTheme';

import { getStyles } from './styles';

import dataImg from './logo.jpg';

const useStyles = makeStyles(getStyles);

const MAP = {
  name: "my-map",
  areas: [
    { name: "1", shape: "poly", coords: [0,0, 110,0, 0,67], fillColor: "rgba(0, 0, 0, 0.2)"},
    { name: "2", shape: "poly", coords: [112,0, 220,0, 220,134], fillColor: "rgba(0, 0, 0, 0.2)"},
    { name: "3", shape: "poly", coords: [0,67, 110,0, 220,134], fillColor: "rgba(0, 0, 0, 0.2)"},
    { name: "4", shape: "poly", coords: [0,68, 220,134, 0,134], fillColor: "rgba(0, 0, 0, 0.2)"},
  ]
}

export const Logo = ({
  style
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box
      className={classes.wrapper}
      style={style}
    >
      <ImageMapper src={dataImg} map={MAP} width={220}
        onClick={area => console.log(area)}
      />
    </Box>
  )
}
  