import {delay} from 'redux-saga';

import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';

function* fetchProduct() {
  yield delay(3000);
  const json = yield axios.get('/data/ProductData.json')
      .then(response => {
        return response.data.Products;
      })
      .catch(error => {
        return error;
      });

  yield put({ type: "FETCH_PRODUCTS", products: json || [{ error: json.message }] });

}

function* actionWatcher() {
  yield takeLatest('GET_PRODUCTS', fetchProduct)


}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
