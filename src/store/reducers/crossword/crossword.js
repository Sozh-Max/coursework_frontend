import {
  CLEAR_CROSSWORD,
  SET_INITIAL_CROSSWORD,
  SET_PICTURE_CROSSWORD,
  SET_CHANGE_ITEM_CROSSWORD,
  SET_IS_SHOW,
} from '../../constants';

export const initialState = {
  initPicture: [
    '1111111111100011111111111',  //1
    '1111111110000001111111111',  //2
    '1111111000000000111111111',  //3
    '1111110000000000011111111',  //4
    '1111100000000011001111111',  //5
    '1111000000001111100111111',  //6
    '1110000000001111100011111',  //7
    '1100000000011111100011111',  //8
    '1100000000011111000001111',  //9
    '1000000000011110000000111',  //10
    '1000000000001100000000111',  //11
    '0000000111000000000000011',  //12
    '0000011111100000000000011',  //13
    '0000011111100011100000011',  //14
    '1000011111100011100000011',  //15
    '1100111110000111000100001',  //16
    '1110011100000110001110001',  //17
    '1111000000000000011110000',  //18
    '1111100000000000111110000',  //19
    '1111110000000001111110000',  //20
    '1111111100000000111100001',  //21
    '1111111110000000000000001',  //22
    '1111111111100000000000011',  //23
    '1111111111111100000000111',  //24
    '1111111111111111100011111',  //25
  ],
  picture: [],
  isInitial: false,
  isShow: false,
  headers: {
    topSide: [],
    topSideLength: 0,
    leftSide: [],
    leftSideLength: 0,
  },
}

export const crossword = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_CROSSWORD:
      return {
        ...state,
        picture: state.picture.map(elem => (
          elem.map(item => ({
            ...item,
            check: false,
          }))
        )),
      };
    case SET_INITIAL_CROSSWORD:
      return {
        ...state,
        isInitial: true,
      };
    case SET_PICTURE_CROSSWORD:
      return {
        ...state,
        ...action.payload,
      };
    case SET_IS_SHOW:
      return {
        ...state,
        isShow: !state.isShow,
      };
    case SET_CHANGE_ITEM_CROSSWORD:
      return {
        ...state,
        picture: state.picture.map(elem => (
        elem.map(item => ({
          ...item,
          check: (item.rowId === action.payload.rowId && item.colId === action.payload.colId) ? !item.check : item.check,
        }))
      )),
      };
    default:
      return state;
  }
}