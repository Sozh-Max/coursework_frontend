import React from 'react';
import clsx from 'clsx';

import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';

import { getStyles } from './styles';

const useStyles = makeStyles(getStyles);

export const CSS9 = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box>

      <Box className={classes.block}>
        <Box className={classes.title}>
          Изменение только первого элемента группы
        </Box>
        <Box className={clsx(
          classes.example,
          classes.exampleFirst,
        )}>
          <Box className={classes.item}>1</Box>
          <Box className={classes.item}>2</Box>
          <Box className={classes.item}>3</Box>
          <Box className={classes.item}>4</Box>
          <Box className={classes.item}>5</Box>
          <Box className={classes.item}>6</Box>
          <Box className={classes.item}>7</Box>
          <Box className={classes.item}>8</Box>
          <Box className={classes.item}>9</Box>
          <Box className={classes.item}>10</Box>
        </Box>
      </Box>

      <Box className={classes.block}>
        <Box className={classes.title}>
          Изменение только последнего элемента группы
        </Box>
        <Box className={clsx(
          classes.example,
          classes.exampleLast,
        )}>
          <Box className={classes.item}>1</Box>
          <Box className={classes.item}>2</Box>
          <Box className={classes.item}>3</Box>
          <Box className={classes.item}>4</Box>
          <Box className={classes.item}>5</Box>
          <Box className={classes.item}>6</Box>
          <Box className={classes.item}>7</Box>
          <Box className={classes.item}>8</Box>
          <Box className={classes.item}>9</Box>
          <Box className={classes.item}>10</Box>
        </Box>
      </Box>

      <Box className={classes.block}>
        <Box className={classes.title}>
          Изменение только четных элементов группы
        </Box>
        <Box className={clsx(
          classes.example,
          classes.exampleEven,
        )}>
          <Box className={classes.item}>1</Box>
          <Box className={classes.item}>2</Box>
          <Box className={classes.item}>3</Box>
          <Box className={classes.item}>4</Box>
          <Box className={classes.item}>5</Box>
          <Box className={classes.item}>6</Box>
          <Box className={classes.item}>7</Box>
          <Box className={classes.item}>8</Box>
          <Box className={classes.item}>9</Box>
          <Box className={classes.item}>10</Box>
        </Box>
      </Box>

      <Box className={classes.block}>
        <Box className={classes.title}>
          Изменение только нечетных элементов группы
        </Box>
        <Box className={clsx(
          classes.example,
          classes.exampleOdd,
        )}>
          <Box className={classes.item}>1</Box>
          <Box className={classes.item}>2</Box>
          <Box className={classes.item}>3</Box>
          <Box className={classes.item}>4</Box>
          <Box className={classes.item}>5</Box>
          <Box className={classes.item}>6</Box>
          <Box className={classes.item}>7</Box>
          <Box className={classes.item}>8</Box>
          <Box className={classes.item}>9</Box>
          <Box className={classes.item}>10</Box>
        </Box>
      </Box>

      <Box className={classes.block}>
        <Box className={classes.title}>
          Изменение соседних двух элементов через три соседних элемента
        </Box>
        <Box className={clsx(
          classes.example,
          classes.exampleMany,
        )}>
          <Box className={classes.item}>1</Box>
          <Box className={classes.item}>2</Box>
          <Box className={classes.item}>3</Box>
          <Box className={classes.item}>4</Box>
          <Box className={classes.item}>5</Box>
          <Box className={classes.item}>6</Box>
          <Box className={classes.item}>7</Box>
          <Box className={classes.item}>8</Box>
          <Box className={classes.item}>9</Box>
          <Box className={classes.item}>10</Box>
        </Box>
      </Box>

      <Box className={classes.block}>
        <Box className={classes.title}>
          Изменение соседних двух элементов через три соседних элемента
        </Box>
        <Box className={clsx(
          classes.example,
          classes.exampleMany,
        )}>
          <Box className={classes.item}>1</Box>
          <Box className={classes.item}>2</Box>
          <Box className={classes.item}>3</Box>
          <Box className={classes.item}>4</Box>
          <Box className={classes.item}>5</Box>
          <Box className={classes.item}>6</Box>
          <Box className={classes.item}>7</Box>
          <Box className={classes.item}>8</Box>
          <Box className={classes.item}>9</Box>
          <Box className={classes.item}>10</Box>
        </Box>
      </Box>

      <Box className={classes.block}>
        <Box className={classes.title}>
          Изменение только заданного элемента (мы берем номер 5)
        </Box>
        <Box className={clsx(
          classes.example,
          classes.exampleElem,
        )}>
          <Box className={classes.item}>1</Box>
          <Box className={classes.item}>2</Box>
          <Box className={classes.item}>3</Box>
          <Box className={classes.item}>4</Box>
          <Box className={classes.item}>5</Box>
          <Box className={classes.item}>6</Box>
          <Box className={classes.item}>7</Box>
          <Box className={classes.item}>8</Box>
          <Box className={classes.item}>9</Box>
          <Box className={classes.item}>10</Box>
        </Box>
      </Box>

      <Box className={classes.block}>
        <Box className={classes.title}>
          Изменение всех элементов, кроме одного (мы берем номер 6)
        </Box>
        <Box className={clsx(
          classes.example,
          classes.exampleExclude,
        )}>
          <Box className={classes.item}>1</Box>
          <Box className={classes.item}>2</Box>
          <Box className={classes.item}>3</Box>
          <Box className={classes.item}>4</Box>
          <Box className={classes.item}>5</Box>
          <Box className={classes.item}>6</Box>
          <Box className={classes.item}>7</Box>
          <Box className={classes.item}>8</Box>
          <Box className={classes.item}>9</Box>
          <Box className={classes.item}>10</Box>
        </Box>
      </Box>

    </Box>
  )
}