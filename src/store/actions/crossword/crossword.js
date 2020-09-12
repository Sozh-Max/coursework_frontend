import {
  CLEAR_CROSSWORD,
  SET_INITIAL_CROSSWORD,
  SET_PICTURE_CROSSWORD,
  SET_HEADERS_CROSSWORD,
  SET_CHANGE_ITEM_CROSSWORD,
  SET_IS_SHOW,
} from '../../constants';

export const clearCrossword = () => ({
  type: CLEAR_CROSSWORD,
});

export const setInitialCrossword = () => ({
  type: SET_INITIAL_CROSSWORD,
});

export const setIsShow = () => ({
  type: SET_IS_SHOW,
});

export const setPictureCrossword = picture => ({
  type: SET_PICTURE_CROSSWORD,
  payload: {
    picture,
  }
});

export const setHeadersCrossword = headers => ({
  type: SET_HEADERS_CROSSWORD,
  payload: {
    headers,
  }
});

export const setChangeItemCrossword = (rowId, colId) => ({
  type: SET_CHANGE_ITEM_CROSSWORD,
  payload: {
    rowId,
    colId,
  }
});