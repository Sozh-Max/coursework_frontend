import React from 'react';
import clsx from 'clsx';

import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';

import { getStyles } from './styles';

const useStyles = makeStyles(getStyles);

export const CSS13 = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box>
      <Box className={classes.block}>
        <Box className={classes.title}>
          Выравнивание текста по вертикали и горизонтали в блочном элементе
        </Box>
        <Box className={
          clsx(
            classes.container,
            classes.variant1,
          )
        }>
          <Box className={classes.item}>1</Box>
          <Box className={classes.item}>2</Box>
          <Box className={classes.item}>3</Box>
        </Box>
      </Box>

      <Box>
        <Box className={classes.block}>
          <Box className={classes.title}>
            Смещение одного из элементов списка к правому или левому краю
          </Box>
          <Box className={
            clsx(
              classes.container,
              classes.variant2,
            )
          }>
            <Box className={classes.item}>1</Box>
            <Box className={classes.item}>2</Box>
            <Box className={
              clsx(
                classes.item,
                classes.itemRight
              )
            }>3</Box>
          </Box>
        </Box>
      </Box>

      <Box className={classes.block}>
        <Box className={classes.title}>
          Преобразование списка из вертикального в горизонтальный или из горизонтального в вертикальный при изменение размера экрана
        </Box>
        <Box className={
          clsx(
            classes.container,
            classes.variant3,
          )
        }>
          <Box className={classes.item}>1</Box>
          <Box className={classes.item}>2</Box>
          <Box className={classes.item}>3</Box>
        </Box>
      </Box>

      <Box className={classes.block}>
        <Box className={classes.title}>
          Изменение порядка следования элементов списка на противоположный.
        </Box>
        <Box className={
          clsx(
            classes.container,
            classes.variant1,
          )
        }>
          <Box className={
            clsx(
              classes.item,
              classes.item1,
            )
          }>
            1
          </Box>
          <Box className={
            clsx(
              classes.item,
              classes.item2,
            )
          }>
            2
          </Box>
          <Box className={
            clsx(
              classes.item,
              classes.item3,
            )
          }>
            3
          </Box>
        </Box>
      </Box>

    </Box>
  )
}