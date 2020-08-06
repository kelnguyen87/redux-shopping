import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchNews() {

  const json = yield fetch('/data/ProductData.json')
    .then(response => response.data.Products);

  yield put({ type: "FETCH_PRODUCTS_RECEIVED", json: json.articles || [{ error: json.message }] });
}

function* actionWatcher() {
  yield takeLatest('FETCH_PRODUCTS', fetchNews)
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
