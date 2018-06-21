import {takeLatest,all, call,put} from "redux-saga/effects";
import axios from "axios";
import {apiURL} from "../Utils/api";


export function* SharedWorker(action) {
  try {
    const res = yield call(axios.post, apiURL, action.payload);
    yield put({type:'SEARCH_RESULT', payload:res.data})
  } catch (e) {
    console.log('error network');
  }
}


export function* SharedWatcher() {
  yield all([
    takeLatest("CHANGE_DATE", Worker)
  ]);
}
