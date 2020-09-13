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

import { cathedraList } from './constants';
import {
  setCathedraName as setCathedraNameAction,
  setCathedraZavName as setCathedraZavNameAction,
  setCathedraTel as setCathedraTelAction,
  setEmployeeName as setEmployeeNameAction,
  setEmployeePosition as setEmployeePositionAction,
  setEmployeeAddress as setEmployeeAddressAction,
  setEmployeeTel as setEmployeeTelAction,
  setSalaryTotal as setSalaryTotalAction,
  setSalaryPay as setSalaryPayAction,
  setSalaryKeep as setSalaryKeepAction,
  setSalaryPremium as setSalaryPremiumAction,
  resetForm as resetFormAction,
  addEmployee as addEmployeeAction,
  deleteEmployee as deleteEmployeeAction,
} from '../../store/actions';

import { getStyles } from './styles';

const useStyles = makeStyles(getStyles);

export const FormPageContainer = ({
  employeesList,
  cathedraName,
  cathedraZavName,
  cathedraTel,
  employeeName,
  employeePosition,
  employeeAddress,
  employeeTel,
  salaryTotal,
  salaryPay,
  salaryKeep,
  salaryPremium,
  setCathedraName,
  setCathedraZavName,
  setCathedraTel,
  setEmployeeName,
  setEmployeePosition,
  setEmployeeAddress,
  setEmployeeTel,
  setSalaryTotal,
  setSalaryPay,
  setSalaryKeep,
  setSalaryPremium,
  resetForm,
  addEmployee,
  deleteEmployee,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [ isShowForm, setIsShowForm ] = useState(true);

  const [ cathedraNameError, setCathedraNameError ] = useState(false);
  const [ cathedraZavNameError, setCathedraZavNameError ] = useState(false);
  const [ cathedraTelError, setCathedraTelError ] = useState(false);
  const [ employeeNameError, setEmployeeNameError ] = useState(false);
  const [ salaryTotalError, setSalaryTotalError ] = useState(false);
  const [ salaryPayError, setSalaryPayError ] = useState(false);

  const validate = () => {
    let result = true;
    if (!cathedraName) {
      result = false;
      setCathedraNameError(true)
    }
    if (!cathedraZavName.trim()) {
      result = false;
      setCathedraZavNameError(true);
    }
    if (!cathedraTel.trim()) {
      result = false;
      setCathedraTelError(true);
    }
    if (!employeeName.trim()) {
      result = false;
      setEmployeeNameError(true);
    }
    if (!salaryTotal.trim()) {
      result = false;
      setSalaryTotalError(true);
    }
    if (!salaryPay.trim()) {
      result = false;
      setSalaryPayError(true);
    }

    return result;
  }

  const addNewPerson = () => {
    if (validate()) {
      addEmployee();
    }
  }

  return (
    <Box>
      {isShowForm && (
        <>
          <Box
            component="fieldset"
            className={classes.container}
          >
            <Box component="legend" className={classes.legend}>Кафедра</Box>
            <Box className={classes.tableWrapper}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.td}>
                      Название кафедры
                    </TableCell>
                    <TableCell className={classes.td}>
                      <FormControl
                        variant="outlined"
                        error={cathedraNameError}
                      >
                        <Select
                          className={classes.select}
                          value={cathedraName ? cathedraName.id : null}
                          onChange={e => {
                            setCathedraName(...cathedraList.filter(item => item.id === e.target.value));
                            setCathedraNameError(false);
                          }}
                        >
                          {cathedraList.map(({id, value}) => (
                            <MenuItem key={id} value={id}>
                              {value}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell className={classes.td}>
                      Список (обязательный)
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.td}>
                      Фамилия заведующего
                    </TableCell>
                    <TableCell className={classes.td}>
                      <TextField
                        label="Фамилия"
                        variant="outlined"
                        type="text"
                        error={cathedraZavNameError}
                        value={cathedraZavName}
                        onChange={e => {
                          setCathedraZavName(e.target.value);
                          setCathedraZavNameError(false);
                        }}
                        className={classes.input}
                      />
                    </TableCell>
                    <TableCell className={classes.td}>
                      Текстовое поле (обязательный)
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.td}>
                      Телефон
                    </TableCell>
                    <TableCell className={classes.td}>
                      <TextField
                        label="Номер телефона"
                        variant="outlined"
                        error={cathedraTelError}
                        type="tel"
                        value={cathedraTel}
                        onChange={e => {
                          setCathedraTel(e.target.value.replace(/[^+-\d]/g, ''));
                          setCathedraTelError(false);
                        }}
                        className={classes.input}
                      />
                    </TableCell>
                    <TableCell className={classes.td}>
                      Ввод чисел, "- и "+" (обязательный)
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Box>
          <Box
            component="fieldset"
            className={classes.container}
          >
            <Box component="legend" className={classes.legend}>Сведения о сотрудниках</Box>
            <Box className={classes.tableWrapper}>
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
                        error={employeeNameError}
                        value={employeeName}
                        onChange={e => {
                          setEmployeeName(e.target.value);
                          setEmployeeNameError(false)
                        }}
                        className={classes.input}
                      />
                    </TableCell>
                    <TableCell className={classes.td}>
                      Текстовое поле
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.td}>
                      Должность
                    </TableCell>
                    <TableCell className={classes.td}>
                      <FormControl component="fieldset">
                        <RadioGroup
                          name="position"
                          value={employeePosition}
                          onChange={e => setEmployeePosition(e.target.value)}
                        >
                          <FormControlLabel value="Старший преподаватель" control={<Radio />} label="Старший преподаватель" />
                          <FormControlLabel value="Преподаватель" control={<Radio />} label="Преподаватель" />
                          <FormControlLabel value="Стажер" control={<Radio />} label="Стажер" />
                        </RadioGroup>
                      </FormControl>
                    </TableCell>
                    <TableCell className={classes.td}>
                      Радио кноки
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.td}>
                      Домашний адрес
                    </TableCell>
                    <TableCell className={classes.td}>
                      <TextField
                        label="Домашний адрес"
                        variant="outlined"
                        type="text"
                        value={employeeAddress}
                        onChange={e => setEmployeeAddress(e.target.value)}
                        className={classes.input}
                      />
                    </TableCell>
                    <TableCell className={classes.td}>
                      Текстовое поле
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.td}>
                      Телефон
                    </TableCell>
                    <TableCell className={classes.td}>
                      <TextField
                        label="Номер телефона"
                        variant="outlined"
                        type="tel"
                        value={employeeTel}
                        onChange={e => setEmployeeTel(e.target.value.replace(/[^+-\d]/g, ''))}
                        className={classes.input}
                      />
                    </TableCell>
                    <TableCell className={classes.td}>
                      Ввод чисел, "- и "+"
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Box>

          <Box
            component="fieldset"
            className={classes.container}
          >
            <Box component="legend" className={classes.legend}>Сведения о зарплате</Box>
            <Box className={classes.tableWrapper}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.td}>
                      Оклад
                    </TableCell>
                    <TableCell className={classes.td}>
                      <TextField
                        label="Оклад"
                        variant="outlined"
                        type="number"
                        error={salaryTotalError}
                        value={salaryTotal}
                        onChange={e => {
                          setSalaryTotal(e.target.value);
                          setSalaryTotalError(false);
                        }}
                        className={classes.input}
                      />
                    </TableCell>
                    <TableCell className={classes.td}>
                      Числовое поле (обязательный)
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.td}>
                      Начислено
                    </TableCell>
                    <TableCell className={classes.td}>
                      <TextField
                        label="Начислено"
                        variant="outlined"
                        type="number"
                        error={salaryPayError}
                        value={salaryPay}
                        onChange={e => {
                          setSalaryPay(e.target.value);
                          setSalaryPayError(false)
                        }}
                        className={classes.input}
                      />
                    </TableCell>
                    <TableCell className={classes.td}>
                      Числовое поле (обязательный)
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.td}>
                      Удержано (процентов)
                    </TableCell>
                    <TableCell className={classes.td}>
                      <Slider
                        defaultValue={0}
                        valueLabelDisplay="auto"
                        value={salaryKeep}
                        step={10}
                        marks
                        min={0}
                        max={50}
                        onChange={(e, value) => setSalaryKeep(value)}
                      />
                    </TableCell>
                    <TableCell className={classes.td}>
                      Ползунок
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.td}>
                      Премия
                    </TableCell>
                    <TableCell className={classes.td}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            color="primary"
                            checked={salaryPremium}
                            onChange={e => setSalaryPremium(e.target.checked)}
                          />
                        }
                        label="Достоин?"
                      />
                    </TableCell>
                    <TableCell className={classes.td}>
                      Флажок
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Box>
        </>
      )}
      <Box
        className={classes.panelButtons}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={addNewPerson}
        >
          Добавить
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => resetForm()}
        >
          Сбросить
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsShowForm(!isShowForm)}
        >
          { isShowForm ? 'Скрыть форму' : 'Показать форму'}
        </Button>
      </Box>
      {(employeesList.length > 0) && (
        <Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className={classes.tabTh}>№</TableCell>
                <TableCell className={classes.tabTh}>Название кафедры</TableCell>
                <TableCell className={classes.tabTh}>Фамилия заведующего</TableCell>
                <TableCell className={classes.tabTh}>Телефон</TableCell>
                <TableCell className={classes.tabTh}>Фамилия сотрудника</TableCell>
                <TableCell className={classes.tabTh}>Должность</TableCell>
                <TableCell className={classes.tabTh}>Должность</TableCell>
                <TableCell className={classes.tabTh}>Телефон</TableCell>
                <TableCell className={classes.tabTh}>Оклад</TableCell>
                <TableCell className={classes.tabTh}>Начислено</TableCell>
                <TableCell className={classes.tabTh}>Удержано</TableCell>
                <TableCell className={classes.tabTh}>Премия</TableCell>
                <TableCell className={classes.tabTh}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employeesList.map((item, i) => (
                <TableRow key={item.id}>
                  <TableCell className={classes.tabTd}>
                    { i + 1 }
                  </TableCell>
                  <TableCell className={classes.tabTd}>
                    { item.cathedraName.value }
                  </TableCell>
                  <TableCell className={classes.tabTd}>
                    { item.cathedraZavName }
                  </TableCell>
                  <TableCell className={classes.tabTd}>
                    { item.cathedraTel }
                  </TableCell>
                  <TableCell className={classes.tabTd}>
                    { item.employeeName }
                  </TableCell>
                  <TableCell className={classes.tabTd}>
                    { item.employeePosition }
                  </TableCell>
                  <TableCell className={classes.tabTd}>
                    { item.employeeAddress }
                  </TableCell>
                  <TableCell className={classes.tabTd}>
                    { item.employeeTel }
                  </TableCell>
                  <TableCell className={classes.tabTd}>
                    { item.salaryTotal }
                  </TableCell>
                  <TableCell className={classes.tabTd}>
                    { item.salaryPay }
                  </TableCell>
                  <TableCell className={classes.tabTd}>
                    { item.salaryKeep }
                  </TableCell>
                  <TableCell className={classes.tabTd}>
                    { item.salaryPremium ? 'Имеет' : 'Не имеет' }
                  </TableCell>
                  <TableCell className={classes.tabTd}>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => deleteEmployee(item.id)}
                    >
                      Del
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      )}

    </Box>
  )
}


const mapStateToProps = state => ({
  employeesList: state.formPage.employeesList,
  cathedraName: state.formPage.inputData.cathedraName,
  cathedraZavName:  state.formPage.inputData.cathedraZavName,
  cathedraTel: state.formPage.inputData.cathedraTel,
  employeeName: state.formPage.inputData.employeeName,
  employeePosition: state.formPage.inputData.employeePosition,
  employeeAddress: state.formPage.inputData.employeeAddress,
  employeeTel: state.formPage.inputData.employeeTel,
  salaryTotal: state.formPage.inputData.salaryTotal,
  salaryPay: state.formPage.inputData.salaryPay,
  salaryKeep: state.formPage.inputData.salaryKeep,
  salaryPremium: state.formPage.inputData.salaryPremium,
})

const mapDispatchToProps = {
  setCathedraName: setCathedraNameAction,
  setCathedraZavName: setCathedraZavNameAction,
  setCathedraTel: setCathedraTelAction,
  setEmployeeName: setEmployeeNameAction,
  setEmployeePosition: setEmployeePositionAction,
  setEmployeeAddress: setEmployeeAddressAction,
  setEmployeeTel: setEmployeeTelAction,
  setSalaryTotal: setSalaryTotalAction,
  setSalaryPay: setSalaryPayAction,
  setSalaryKeep: setSalaryKeepAction,
  setSalaryPremium: setSalaryPremiumAction,
  resetForm: resetFormAction,
  addEmployee: addEmployeeAction,
  deleteEmployee: deleteEmployeeAction,
}

export const FormPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormPageContainer)
