import { REQUESTLOGIN, RESULTLOGIN } from '../constants/index';

export const requestLogin = logininfo => {
    return {
        type: REQUESTLOGIN,
        fetchConfig:{
            url: "http://www.google.com/",
            data: logininfo,
            requestMethod: "POST",
            responseMethod: responseLogin
        }
       
    }
}
export const responseLogin = response => {
    console.log(response);
    return {
        type: RESULTLOGIN,
        response 
    }
}