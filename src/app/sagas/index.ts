
import { all } from 'redux-saga/effects';
import songsSaga from './songsSaga';

export default function* rootSaga() {
  console.log("root saga called")
  yield all([songsSaga()]);
}
