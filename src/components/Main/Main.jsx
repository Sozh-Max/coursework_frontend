import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from '@material-ui/core/styles/useTheme';

import { Navigation } from '../Navigation';

import { getStyles } from './styles';
import { DefaultContent } from '../DefaultContent';
import { SectionMenu } from '../SectionMenu';
import { htmlMenuList, htmlRouters } from '../../content/HTML';
import { cssMenuList, cssRouters } from '../../content/CSS';
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
import {
  CSS1,
  CSS2,
  CSS3,
  CSS4,
  CSS5,
  CSS6,
  CSS7,
  CSS8,
  cssDescription,
} from '../../content/CSS';

const htmlElements = {
  HTML1,
  HTML2,
  HTML3,
  HTML4,
  HTML5,
  HTML6,
  HTML7,
};

const cssElements = {
  CSS1,
  CSS2,
  CSS3,
  CSS4,
  CSS5,
  CSS6,
  CSS7,
  CSS8,
}

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
          <SectionMenu list={htmlMenuList} />
            <Box className={classes.mainWrapper}>
              <Switch>
                {htmlRouters.map(({
                  path,
                  element,
                  description,
                }) => {
                  const Element = htmlElements[element];
                  return (
                    <Route exact path={path}>
                      <DefaultContent
                        description={htmlDescription[description]}
                      >
                        <Element />
                      </DefaultContent>
                    </Route>
                  )
                })}
              </Switch>
            </Box>
          <SectionMenu list={htmlMenuList} />
        </Route>

        <Route path='/CSS'>
          <SectionMenu list={cssMenuList} />
          <Box className={classes.mainWrapper}>
            <Switch>
              {cssRouters.map(({
                path,
                element,
                description,
              }) => {
                const Element = cssElements[element];
                return (
                  <Route exact path={path}>
                    <DefaultContent
                      description={cssDescription[description]}
                    >
                      <Element />
                    </DefaultContent>
                  </Route>
                )
              })}
            </Switch>
          </Box>
          <SectionMenu list={cssMenuList} />
        </Route>

      </Switch>
    </Box>
  )
}
  