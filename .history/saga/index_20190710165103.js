
import { put, takeLatest, all } from 'redux-saga/effects';
function* fetchNews() {
  const json = yield fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
        .then(response => {response.json() });   
  yield put({ type: "NEWS_RECEIVED", json: json, });
}
function* actionWatcher() {
     yield takeLatest('GET_NEWS', fetchNews)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}