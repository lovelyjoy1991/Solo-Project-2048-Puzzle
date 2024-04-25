import * as types from '../constants/actionTypes.js';

const initialState = {
  grid: [],
  score: 0,
  gameOver: false,
  bestScore: 300,
};
const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MOVE_UP: {
      return { ...state };
    }
    case types.MOVE_DOWN: {
      return state;
    }
    case types.MOVE_LEFT: {
      return state;
    }
    case types.MOVE_RIGHT: {
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
