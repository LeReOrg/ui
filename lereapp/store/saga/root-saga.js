import {all, call} from 'redux-saga/effects'
import categoriesSaga from './categoriesSaga'
import productSaga from './productSaga'
export default function* rootSaga() {
   yield all([call(categoriesSaga),call(productSaga)]);
}
