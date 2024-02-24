import { combineReducers } from '@reduxjs/toolkit';
import songsReducer from './songsReducer';
import overallReducer from './overallReducer';

const rootReducer = combineReducers({
  songs: songsReducer,
  overall: overallReducer,
});

export default rootReducer;

