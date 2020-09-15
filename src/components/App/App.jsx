import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from '@material-ui/core/styles/useTheme';

import { Header } from '../Header';
import { Main } from '../Main';
import { Footer } from '../Footer';

import { getStyles } from './styles';

const useStyles = makeStyles(getStyles);

export const AppContainer = ({ history }) => (
  <>
    <Header history={history} />
    <Main />
    <Footer />
  </>
)

export const App = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box className={classes.wrapper}>
      <Switch>
        <Route path='/' component={AppContainer} />
      </Switch>
    </Box>
  );
}
