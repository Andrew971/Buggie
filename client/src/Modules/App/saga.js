import {takeLatest,all, call,put} from "redux-saga/effects";
import axios from "axios";
import {apiUser} from "../../Utils/api";


export function* saveLocation(action) {
  try {
    const res = yield call(axios.post, apiUser+'location', action.payload);

    yield put({type:'LOCATION_CONFIRM_STATUS', payload:res.data})

    if(res.data.status){
      saveLocation(action)
  }else{
      console.log('error status')
    }
  } catch (e) {
    console.log('error network');
  }
}

export function* getStore(action) {
  try {
    const store = yield call(axios.post, apiUser+'places', action.payload);
    yield put({type:'PRE_FETCH_DATA', payload:store.data})
    yield put({type:'PRE_FETCH_DATA_STATUS', payload:store.data})

  } catch (e) {
    console.log('error network');
  }
}

export function* appWatcher() {
  yield all([
    takeLatest("LOCATION_CONFIRM_REQUESTED", saveLocation),
    takeLatest("STORE_LIST_REQUESTED", getStore)
  ]);
}
