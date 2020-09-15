import React, { useState } from 'react';
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
import TextField from '@material-ui/core/TextField';

import {
  setWorkerName as setWorkerNameAction,
  setWorkerDate as setWorkerDateAction,
  addWorker as addWorkerAction,
} from '../../store/actions';
import { getWorkerCategory } from './utils';

import { getStyles } from './styles';

const useStyles = makeStyles(getStyles);

const DatePageContainer = ({
  workerList,
  workerName,
  workerDate,
  setWorkerName,
  setWorkerDate,
  addWorker,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [ workerNameError, setWorkerNameError ] = useState(false);
  const [ workerDateError, setWorkerDateError ] = useState(false);

  const validate = () => {
    let result = true;
    if (!workerName.trim()) {
      result = false;
      setWorkerNameError(true);
    }
    if (!workerDate.trim()) {
      result = false;
      setWorkerDateError(true);
    }
    return result;
  }

  const handleAddWorker = () => {
    if (validate()) {
      addWorker();
    }
  }

  return (
    <Box>
      <Box className={classes.container}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className={classes.td}>
                Фамилия сотрудника
              </TableCell>
              <TableCell className={classes.td}>
                <TextField
                  label="Фамилия"
                  variant="outlined"
                  type="text"
                  error={workerNameError}
                  value={workerName}
                  onChange={e => {
                    setWorkerName(e.target.value);
                    setWorkerNameError(false);
                  }}
                  className={classes.input}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.td}>
                Дата начала контракта
              </TableCell>
              <TableCell className={classes.td}>
                <form noValidate>
                  <TextField
                    id="date"
                    type="date"
                    className={classes.date}
                    error={workerDateError}
                    value={workerDate}
                    onChange={e => {
                      setWorkerDate(e.target.value);
                      setWorkerDateError(false);
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </form>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
      <Box className={classes.panelButtons}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddWorker}
        >
          Добавить
        </Button>
      </Box>
      <Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tabTh}>№</TableCell>
              <TableCell className={classes.tabTh}>Фамилия</TableCell>
              <TableCell className={classes.tabTh}>Дата начала контракта</TableCell>
              <TableCell className={classes.tabTh}>Категория</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {workerList.map((item, i) => (
              <TableRow key={item.id}>
                <TableCell className={classes.tabTd}>{ i + 1 }</TableCell>
                <TableCell className={classes.tabTd}>{ item.workerName }</TableCell>
                <TableCell className={classes.tabTd}>{ item.workerDate }</TableCell>
                <TableCell className={classes.tabTd}>{ getWorkerCategory(item.workerDate) }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  )
}

const mapStateToProps = state => ({
  workerList: state.datePage.workerList,
  workerName: state.datePage.inputData.workerName,
  workerDate: state.datePage.inputData.workerDate,
})

const mapDispatchToProps = {
  setWorkerName: setWorkerNameAction,
  setWorkerDate: setWorkerDateAction,
  addWorker: addWorkerAction,
}

export const DatePage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DatePageContainer);
