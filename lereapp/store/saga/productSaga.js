import { all, call, delay, put, take, takeLatest, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { GET_TOP_PRODUCT,GET_PRODUCT_BY_CATEGORY ,GET_PRODUCT_DETAIL} from '../types'
import config from '../../config';
import {getProductSuccess} from '../action/products_action'
function* getTopProduct() {
    try {
        const res = yield axios(`${config.api}/product/getTopProduct`)
        yield put(getProductSuccess(res.data))
    } catch (error) {
       console.log(error)
    }
}
function* getProductsByCategory(params) {
    try {
      const res = yield axios(`${config.api}/product/getProductByCategoryId/${params.params}`);
      yield put(getProductSuccess(res.data));
    } catch (error) {
      console.log(error);
    }
}
function* getProductDetail(params) {
  try {
    const res = yield axios(`${config.api}/product/getProductById/${params.params}`);
    yield put(getProductSuccess(res.data));
  } catch (error) {
    console.log(error);
  }
}
function* productSaga(){
    yield all([
        takeLatest(GET_TOP_PRODUCT,getTopProduct),
        takeLatest(GET_PRODUCT_BY_CATEGORY,getProductsByCategory),
        takeLatest(GET_PRODUCT_DETAIL,getProductDetail),

    ])
}
export default productSaga;
