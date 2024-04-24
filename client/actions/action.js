import * as types from '../constants/actionTypes';

export const moveTiles = (direction) => ({ type: MOVE_TILES, direction });
export const resetGame = () => ({ type: RESET_GAME });
