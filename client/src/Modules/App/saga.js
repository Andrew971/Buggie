import {takeLatest,all, call,put} from "redux-saga/effects";
import axios from "axios";
import {apiUser} from "../../Utils/api";


export function* saveLocation(action) {
  console.log(action)
  try {
    const res = yield call(axios.post, apiUser+'location', action.payload);
    yield put({type:'SEARCH_RESULT', payload:res.data})
  } catch (e) {
    console.log('error network');
  }
}


export function* appWatcher() {
  yield all([
    takeLatest("LOCATION_CONFIRM_REQUESTED", saveLocation)
  ]);
}
