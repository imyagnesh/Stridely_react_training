import { all, fork,  } from 'redux-saga/effects';
import product from './productSaga';

export default function* rootSaga() {
  yield all([fork(product)]);
}
