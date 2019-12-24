import { handleAction, combineActions } from 'redux-actions';
import {
    RECEIVE_SAVE_RSVP,
    receiveSaveRspv
} from '../actions/rsvpAction';
let initialState = {
    name: "",
    email: "",
    guest: "",
    message: "",
    response: ""
}

export const rsvp = handleAction(
    combineActions(receiveSaveRspv),
    {
        next(state, action) {
            switch (action.type) {
                case RECEIVE_SAVE_RSVP:
                    return {
                        ...state,
                        name: action.payload.name,
                        email: action.payload.email,
                        guest: action.payload.guest,
                        message: action.payload.message,
                        response: action.payload.response
                    }            
                default:
                    break;
            }
        },throw(state,action){
            switch (action.type) {
                default:
                    return state;
            }
        }
    },initialState
);
