import {
  SET_WORKER_NAME,
  SET_WORKER_DATE,
} from '../../constants';

export const initialInputData = {
  workerName: '',
  workerDate: '',
}

export const initialState = {
  lastId: 7,
  workerList: [],
  inputData: initialInputData,
}

export const datePage = (state = initialState, action) => {
  switch (action.type) {
    case SET_WORKER_NAME:
    case SET_WORKER_DATE:
      return {
        ...state,
        inputData: {
          ...state.inputData,
          ...action.payload,
        },
      };
    default:
      return state;
  }
}
