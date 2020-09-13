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
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import Slider from '@material-ui/core/Slider';
import Checkbox from '@material-ui/core/Checkbox';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';
// import DateFnsUtils from '@date-io/date-fns';

import {
  setWorkerName as setWorkerNameAction,
  setWorkerDate as setWorkerDateAction,
} from '../../store/actions';

import { getStyles } from './styles';

const useStyles = makeStyles(getStyles);

const DatePageContainer = ({
  workerName,
  workerDate,
  setWorkerName,
  setWorkerDate,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [ workerNameError, setWorkerNameError ] = useState(false);

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
                {/*<MuiPickersUtilsProvider utils={DateFnsUtils}>*/}
                {/*  <KeyboardDatePicker*/}
                {/*    disableToolbar*/}
                {/*    variant="inline"*/}
                {/*    format="MM/dd/yyyy"*/}
                {/*    margin="normal"*/}
                {/*    id="date-picker-inline"*/}
                {/*    label="Date picker inline"*/}
                {/*    value={workerDate}*/}
                {/*    onChange={setWorkerDate}*/}
                {/*    KeyboardButtonProps={{*/}
                {/*      'aria-label': 'change date',*/}
                {/*    }}*/}
                {/*  />*/}
                {/*</MuiPickersUtilsProvider>*/}
                <form noValidate>
                  <TextField
                    id="date"
                    type="date"
                    className={classes.date}
                    onChange={e => console.log(e.target.value)}
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
    </Box>
  )
}

const mapStateToProps = state => ({
  workerName: state.datePage.inputData.workerName,
  workerDate: state.datePage.inputData.workerDate,
})

const mapDispatchToProps = {
  setWorkerName: setWorkerNameAction,
  setWorkerDate: setWorkerDateAction,
}

export const DatePage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DatePageContainer);
