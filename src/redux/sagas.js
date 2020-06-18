import { call, put, takeEvery } from 'redux-saga/effects';
import { REQUEST_AMIIBO_LIST, receiveAmiiboList } from './actions';
import { fetchAmiiboList } from './api';

function* getAmiiboList() {
  try {
    const data = yield call(fetchAmiiboList);
    data.forEach((element) => {
      element.price = Math.round(Math.random()*10000);
    });
    yield put(receiveAmiiboList(data));
  } catch (error) {
    console.log(error);
  }
}

export default function* mySaga() {
  yield takeEvery(REQUEST_AMIIBO_LIST, getAmiiboList);
}