import { all, call, delay, put, take, takeLatest, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { GET_CATEGORIES } from './action/types'
import config from '../config'
import { loadDataSuccess } from './action/categories_action'
function* getCategories() {
    try {
        const res = yield axios(`${config.api}/categories`)
        
        const data =  res.data
        yield put(loadDataSuccess(data))
    } catch (error) {
       console.log(error)
    }
}


function* rootSaga(){
    yield all([
        takeEvery(GET_CATEGORIES,getCategories)
    ])
}

export default rootSaga;