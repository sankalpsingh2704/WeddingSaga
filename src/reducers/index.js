import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer'
import { rsvp } from './rsvp';
import * as sagas  from './sagas';
import { fork, all } from 'redux-saga/effects';

export const rootReducer = combineReducers({loginReducer,rsvp});

export function* rootSaga() {
    yield all([
        ...Object.values(sagas)
    ].map(fork));
}
