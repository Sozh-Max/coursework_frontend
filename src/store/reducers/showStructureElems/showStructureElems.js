import {
  SET_SHOW_SUB_NAVIG,
} from '../../constants';

const initialState = {
  showSubNavig: [],
}

export const showStructureElems = (state = initialState, action) => {
  switch (action.type) {
    case SET_SHOW_SUB_NAVIG:
      return {
        ...state,
        showSubNavig: action.value,
      };
    default:
      return state;
  }
}
