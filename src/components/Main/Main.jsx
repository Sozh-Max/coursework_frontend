import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from '@material-ui/core/styles/useTheme';

import { Navigation } from '../Navigation';

import { getStyles } from './styles';
import { DefaultContent } from '../DefaultContent';
import { SectionMenu } from '../SectionMenu';
import { menuList } from '../../content/HTML';
import {
  HTML1,
  HTML2,
  HTML3,
  HTML4,
  HTML5,
  HTML6,
  HTML7,
  htmlDescription,
} from '../../content/HTML';

const useStyles = makeStyles(getStyles);

export const Main = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box
      component='main'
      className={classes.wrapper}
    >
      <Navigation />
      <Switch>

        <Route path='/HTML'>
          <SectionMenu list={menuList} />
          <Switch>
            <Route exact path='/HTML/html-1'>
              <DefaultContent
                description={htmlDescription['html-1']}
              >
                <HTML1 />
              </DefaultContent>
            </Route>
            <Route exact path='/HTML/html-2'>
              <DefaultContent
                description={htmlDescription['html-2']}
              >
                <HTML2 />
              </DefaultContent>
            </Route>
            <Route exact path='/HTML/html-3'>
              <DefaultContent
                description={htmlDescription['html-3']}
              >
                <HTML3 />
              </DefaultContent>
            </Route>
            <Route exact path='/HTML/html-4'>
              <DefaultContent
                description={htmlDescription['html-4']}
              >
                <HTML4 />
              </DefaultContent>
            </Route>
            <Route exact path='/HTML/html-5'>
              <DefaultContent
                description={htmlDescription['html-5']}
              >
                <HTML5 />
              </DefaultContent>
            </Route>
            <Route exact path='/HTML/html-6'>
              <DefaultContent
                description={htmlDescription['html-6']}
              >
                <HTML6 />
              </DefaultContent>
            </Route>
            <Route exact path='/HTML/html-7'>
              <DefaultContent
                description={htmlDescription['html-7']}
              >
                <HTML7 />
              </DefaultContent>
            </Route>
          </Switch>
          <SectionMenu list={menuList} />
        </Route>

      </Switch>
    </Box>
  )
}
  