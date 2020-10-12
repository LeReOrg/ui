import { all, call, delay, put, take, takeLatest, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { GET_TOP_PRODUCT,GET_PRODUCT_BY_CATEGORY } from '../types'
import config from '../../config';
import {getTopProductSuccess} from '../action/products_action'
function* getTopProduct() {
    try {
        const res = yield axios(`${config.api}/product/getTopProduct`)
        yield put(getTopProductSuccess(res.data))
    } catch (error) {
       console.log(error)
    }
}
function* getProductsByCategory(params) {
    try {
      const res = yield axios(`${config.api}/products/${params.params}`);
      yield put(getTopProductSuccess(res.data));
    } catch (error) {
      console.log(error);
    }
  }
function* productSaga(){
    yield all([
        takeLatest(GET_TOP_PRODUCT,getTopProduct),
        takeLatest(GET_PRODUCT_BY_CATEGORY,getProductsByCategory),

    ])
}
export default productSaga;
