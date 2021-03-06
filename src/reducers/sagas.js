import { takeEvery, call, put, takeLatest } from 'redux-saga/effects';

import { REQUEST_SAVE_RSVP, receiveSaveRspv } from '../actions/rsvpAction';
import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAe0NE44LxbvmWHd4Nkm4vO3YAZQAsEZ_w",
    authDomain: "bazar-db.appspot.com",
    databaseURL: "https://bazar-db.firebaseio.com",
    projectId: "bazar-db",
    storageBucket: "bazar-db.appspot.com",
    messagingSenderId: "sender-id",
    appId: "bazar-db",
    measurementId: "G-measurement-id",
};
firebase.initializeApp(firebaseConfig);
const userRef = firebase.database().ref("WEDDING");
const AddToDb = (payload) => {
    userRef.push(payload);
}

firebase.database().ref("WEDDING/NOTIFY").on('value', (snapshot) => {
    displayNotification(snapshot.val());
});


export function* callRequestSaveRsvp(action) {
    AddToDb(action.payload);
    if (action.payload) {
        action.payload["response"] = "success";
        yield put(receiveSaveRspv(action.payload));
    }

}

export function* requestSaveRspvSaga() {
    yield takeLatest(REQUEST_SAVE_RSVP, callRequestSaveRsvp);
}

