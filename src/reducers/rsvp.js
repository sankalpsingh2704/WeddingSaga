import {
    RECEIVE_SAVE_RSVP
} from '../actions/rsvpAction';
let initialState = {
    name: "",
    email: "",
    guest: "",
    message: "",
    response: ""
}
export function rsvp(state = initialState, action){
    switch(action.type){        
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
            return state;
    }
    
} 