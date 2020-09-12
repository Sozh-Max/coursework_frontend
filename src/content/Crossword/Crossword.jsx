import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';


import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import Button from '@material-ui/core/Button';
import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from '@material-ui/core/styles/useTheme';

import { CustomDialog } from '../../components/CustomDialog';
import { reformatPicture, reformatHeaders, getTdClassName, checkResult } from './utils';
import {
  clearCrossword as clearCrosswordAction,
  setChangeItemCrossword as setChangeItemCrosswordAction,
  setHeadersCrossword as setHeadersCrosswordAction,
  setInitialCrossword as setInitialCrosswordAction,
  setIsShow as setIsShowAction,
  setPictureCrossword as setPictureCrosswordAction,
} from '../../store/actions';

import { getStyles } from './styles';

const useStyles = makeStyles(getStyles);

export const CrosswordContainer = ({
  initPicture,
  picture,
  headers: {
    topSide,
    topSideLength,
    leftSide,
    leftSideLength,
  },
  isInitial,
  isShow,
  clearCrossword,
  setChangeItemCrossword,
  setPictureCrossword,
  setInitialCrossword,
  setIsShow,
  setHeadersCrossword,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [ result, setResult] = useState(false);
  const [ showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!isInitial) {
      setPictureCrossword(reformatPicture(initPicture));
      setHeadersCrossword(reformatHeaders(initPicture));
      setInitialCrossword();
    }
  }, [isInitial]);

  const handleCheckResult = () => {
    setResult(checkResult(picture));
    setShowModal(true);
  }

  return(
    <Box className={classes.wrapper}>
      {(isInitial && picture.length > 0) && (
        <>
          <Table>
          <TableHead>
            {topSide.map((column, i) => (
              <TableRow key={i}>
                {(i === 0) && (
                  <TableCell
                    className={classes.th}
                    colspan={topSideLength}
                    rowspan={leftSideLength}
                  />
                )}
                {column.map((item, i) => (
                  <TableCell
                    key={i}
                    className={classes.th}
                  >
                    { item ? item : '' }
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {leftSide.map((row, i) => (
              <TableRow key={i}>
                {row.map((item, i) => (
                  <TableCell
                    key={i}
                    className={classes.th}
                  >
                    { item ? item : '' }
                  </TableCell>
                ))}
                {picture[i].map((item, j) => (
                  <TableCell
                    key={j}
                    className={
                      clsx(
                        classes.td,
                        classes[getTdClassName(item, isShow)]
                      )
                    }
                    onClick={() => setChangeItemCrossword(item.rowId, item.colId)}
                  />
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
          <Box className={classes.bottomPanel}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleCheckResult()}
            >
              Проверить
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => clearCrossword()}
            >
              Очистить
            </Button>
            <Button
              variant="contained"
              onClick={() => setIsShow()}
            >
              { isShow ? 'Скрыть' : 'Показать' }
            </Button>
          </Box>
        </>
      )}
      <CustomDialog
        open={showModal}
        handleClose={() => setShowModal(false)}
      >
        { result ? 'Поздравляем, Вы победили!!!' : 'К сожалению Вам немного не хватило до правильно ответа' }
      </CustomDialog>
    </Box>
  )
}

const mapStateToProps = state => ({
  initPicture: state.crossword.initPicture,
  picture: state.crossword.picture,
  headers: state.crossword.headers,
  isInitial: state.crossword.isInitial,
  isShow: state.crossword.isShow,
});

const mapDispatchToProps = {
  clearCrossword: clearCrosswordAction,
  setChangeItemCrossword: setChangeItemCrosswordAction,
  setPictureCrossword: setPictureCrosswordAction,
  setInitialCrossword: setInitialCrosswordAction,
  setIsShow: setIsShowAction,
  setHeadersCrossword: setHeadersCrosswordAction,
}

export const Crossword = connect(
  mapStateToProps,
  mapDispatchToProps
)(CrosswordContainer);
