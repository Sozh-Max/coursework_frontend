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
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
  RESET_FORM,
} from '../../constants';

export const initialInputData = {
  cathedraName: '',
  cathedraZavName: '',
  cathedraTel: '',
  employeeName: '',
  employeePosition: '',
  employeeAddress: '',
  employeeTel: '',
  salaryTotal: '',
  salaryPay: '',
  salaryKeep: '',
  salaryPremium: false,
}

export const initialState = {
  lastId: 0,
  employeesList: [],
  inputData: initialInputData,
}

export const formPage = (state = initialState, action) => {
  switch (action.type) {
    case RESET_FORM:
      return {
        ...state,
        inputData: initialInputData,
      };
    case SET_CATHEDRA_NAME:
    case SET_CATHEDRA_ZAV_NAME:
    case SET_CATHEDRA_TEL:
    case SET_EMPLOYEE_NAME:
    case SET_EMPLOYEE_POSITION:
    case SET_EMPLOYEE_ADDRESS:
    case SET_EMPLOYEE_TEL:
    case SET_SALARY_TOTAL:
    case SET_SALARY_PAY:
    case SET_SALARY_KEEP:
    case SET_SALARY_PREMIUM:
      return {
        ...state,
        inputData: {
          ...state.inputData,
          ...action.payload,
        },
      };
    case ADD_EMPLOYEE:
      const newEmployeesList = state.employeesList;
      newEmployeesList.push({
        ...state.inputData,
        id: ++state.lastId,
      })
      return {
        ...state,
        employeesList: newEmployeesList,
        lastId: state.lastId++,
        inputData: initialInputData,
      }
    case DELETE_EMPLOYEE:
      const index = state.employeesList.findIndex(item => item.id === action.payload.id);
      return {
        ...state,
        employeesList: [
          ...state.employeesList.slice(0, index),
          ...state.employeesList.slice(index + 1),
        ],
      }
    default:
      return state;
  }
}
