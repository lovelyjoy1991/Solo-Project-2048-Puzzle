import * as types from '../constants/actionTypes.js';

const initialState = {};
const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MOVE_TILES: {
      return state;
    }
    case types.RESET_GAME: {
      return state;
    }
    default: {
      return state;
    }
  }
};
export default boardReducer;
