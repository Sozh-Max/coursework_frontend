import {
  SET_WORKER_NAME,
  SET_WORKER_DATE,
  ADD_WORKER,
} from '../../constants';

const initialInputData = {
  workerName: '',
  workerDate: '',
}

const initWorkerList = [
  {
    id: 1,
    workerName: 'Васильев',
    workerDate: '2018-04-04',
  },
  {
    id: 2,
    workerName: 'Григорьев',
    workerDate: '2015-12-15',
  },
  {
    id: 3,
    workerName: 'Дятлов',
    workerDate: '2014-05-22',
  },
  {
    id: 4,
    workerName: 'Молотов',
    workerDate: '2019-10-11',
  },
  {
    id: 5,
    workerName: 'Иванов',
    workerDate: '2009-12-31',
  },
  {
    id: 6,
    workerName: 'Петров',
    workerDate: '2017-07-20',
  },
]

export const initialState = {
  lastId: 6,
  workerList: initWorkerList,
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
    case ADD_WORKER:
      const newWorkerList = state.workerList;
      newWorkerList.push({
        id: ++state.lastId,
        workerName: state.inputData.workerName,
        workerDate: state.inputData.workerDate,
      })
      return {
        ...state,
        lastId: state.lastId++,
        workerList: newWorkerList,
        inputData: initialInputData,
      }
    default:
      return state;
  }
}
