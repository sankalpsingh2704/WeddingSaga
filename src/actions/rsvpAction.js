import { createAction } from 'redux-actions';

export const REQUEST_SAVE_RSVP = 'REQUEST_SAVE_RSVP';
export const RECEIVE_SAVE_RSVP = 'RECEIVE_SAVE_RSVP';

export const requestSaveRspv = createAction(REQUEST_SAVE_RSVP);
export const receiveSaveRspv = createAction(RECEIVE_SAVE_RSVP);
