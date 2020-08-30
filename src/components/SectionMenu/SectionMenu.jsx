import React from 'react';
import { NavLink } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from '@material-ui/core/styles/useTheme';

import { getStyles } from './styles';

const useStyles = makeStyles(getStyles);

export const SectionMenu = ({
  list,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box className={classes.wrapper}>
      {
        list.map(elem => (
          <Box
            component={NavLink}
            className={classes.item}
            to={elem.url}
            key={elem.id}
            activeClassName='selected'
          >
            { `${elem.id}. ${elem.title}` }
          </Box>
        ))
      }
    </Box>
  )
}