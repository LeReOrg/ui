import {all, call} from 'redux-saga/effects'
import categoriesSaga from './categoriesSaga'
import productSaga from './productSaga'
import cartSaga from './cartSaga'
export default function* rootSaga() {
   yield all([call(categoriesSaga),call(productSaga),call(cartSaga)]);
}
