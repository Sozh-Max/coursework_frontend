import React, { useEffect, useState, useRef } from 'react';

import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';

import { elementMoveAction } from './utils';

import { getStyles } from './styles';

const useStyles = makeStyles(getStyles);

export const JS1 = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [ intervalKey, setIntervalKey] = useState(null);

  const wrapperElement = useRef(null);
  const movingElement = useRef(null);

  useEffect(() => {
    setIntervalKey(elementMoveAction(movingElement, wrapperElement));
  }, [])

  useEffect(() => {
    return () => clearInterval(intervalKey);
  }, [intervalKey])

  return (
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
  )
}