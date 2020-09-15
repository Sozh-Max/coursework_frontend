import {
  SET_WORKER_NAME,
  SET_WORKER_DATE,
  ADD_WORKER,
} from '../../constants';

export const setWorkerName = workerName => ({
  type: SET_WORKER_NAME,
  payload: {
    workerName,
  }
});

export const setWorkerDate = workerDate => ({
  type: SET_WORKER_DATE,
  payload: {
    workerDate,
  }
});

export const addWorker = () => ({
  type: ADD_WORKER,
});
