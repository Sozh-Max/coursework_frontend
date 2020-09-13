import React, { useEffect, useRef } from 'react';

import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { goToDown, goTo, goToRight, initPositionElement } from './utils';

import { getStyles } from './styles';

const useStyles = makeStyles(getStyles);

export const JS2 = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const wrapperElement = useRef(null);
  const movingElement = useRef(null);

  const keyboardEventHandler = e => {
    if (e.key === 'w') goTo(movingElement, 'top');
    if (e.key === 's') goToDown(movingElement, wrapperElement);
    if (e.key === 'a') goTo(movingElement, 'left');
    if (e.key === 'd') goToRight(movingElement, wrapperElement);
  };

  useEffect(() => {
    initPositionElement(movingElement, wrapperElement);
    window.addEventListener('keydown', keyboardEventHandler);
    return () => window.removeEventListener('keydown', keyboardEventHandler);
  }, [])

  return (
    <Box>
      <Box className={classes.title}>
        Для движения вверх нажмите кнопку "w", для движения вниз нажмите кнопку "s", ждя движения влево нажмите кнопку "a", для движения вправо нажмите кнопку "d".
      </Box>
      <Box
        ref={wrapperElement}
        className={classes.wrapper}
      >
        <Box
          ref={movingElement}
          className={classes.element}
        >
          Максим
        </Box>
      </Box>
    </Box>
  )
}