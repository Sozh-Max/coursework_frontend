import {
  SET_CATHEDRA_NAME,
  SET_CATHEDRA_ZAV_NAME,
  SET_CATHEDRA_TEL,
  SET_EMPLOYEE_NAME,
  SET_EMPLOYEE_POSITION,
  SET_EMPLOYEE_ADDRESS,
  SET_EMPLOYEE_TEL,
  SET_SALARY_TOTAL,
  SET_SALARY_PAY,
  SET_SALARY_KEEP,
  SET_SALARY_PREMIUM,
  RESET_FORM,
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
} from '../../constants';

export const setCathedraName = cathedraName => ({
  type: SET_CATHEDRA_NAME,
  payload: {
    cathedraName,
  }
});

export const setCathedraZavName = cathedraZavName => ({
  type: SET_CATHEDRA_ZAV_NAME,
  payload: {
    cathedraZavName,
  }
});

export const setCathedraTel = cathedraTel => ({
  type: SET_CATHEDRA_TEL,
  payload: {
    cathedraTel,
  }
});

export const setEmployeeName = employeeName => ({
  type: SET_EMPLOYEE_NAME,
  payload: {
    employeeName,
  }
});

export const setEmployeePosition = employeePosition => ({
  type: SET_EMPLOYEE_POSITION,
  payload: {
    employeePosition,
  }
});

export const setEmployeeAddress = employeeAddress => ({
  type: SET_EMPLOYEE_ADDRESS,
  payload: {
    employeeAddress,
  }
});

export const setEmployeeTel = employeeTel => ({
  type: SET_EMPLOYEE_TEL,
  payload: {
    employeeTel,
  }
});

export const setSalaryTotal = salaryTotal => ({
  type: SET_SALARY_TOTAL,
  payload: {
    salaryTotal,
  }
});

export const setSalaryPay = salaryPay => ({
  type: SET_SALARY_PAY,
  payload: {
    salaryPay,
  }
});

export const setSalaryKeep = salaryKeep => ({
  type: SET_SALARY_KEEP,
  payload: {
    salaryKeep,
  }
});

export const setSalaryPremium = salaryPremium => ({
  type: SET_SALARY_PREMIUM,
  payload: {
    salaryPremium,
  }
});

export const addEmployee = () => ({
  type: ADD_EMPLOYEE,
});

export const deleteEmployee = id => ({
  type: DELETE_EMPLOYEE,
  payload: {
    id,
  }
});

export const resetForm = () => ({
  type: RESET_FORM,
});
