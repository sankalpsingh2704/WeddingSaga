import { takeEvery, call , put,takeLatest } from 'redux-saga/effects';

import {REQUEST_SAVE_RSVP , receiveSaveRspv } from '../actions/rsvpAction';


export function* callRequestSaveRsvp(action){
    action.payload.response = "success"
    yield put(receiveSaveRspv(action.payload))
    console.log("call")
}

export function* requestSaveRspvSaga(){
    yield takeLatest(REQUEST_SAVE_RSVP,callRequestSaveRsvp);
}

