import {
    REQUESTLOGIN,
    RESULTLOGIN
} from "../constants/index";

let initialState = {
    username: "",
    password: "",
    response: ""
};
export function loginReducer (state = initialState,actions){
    switch(actions.type){
        case REQUESTLOGIN:
            console.log("REQ");
            return state;
        case RESULTLOGIN:
            console.log(actions);
            return {
                ...state,
                response: actions.response,
                username: actions.response.username,
                password: actions.response.password
            }
        default:
            return state
    }

}