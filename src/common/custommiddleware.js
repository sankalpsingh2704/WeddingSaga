require('es6-promise').polyfill();
const fetch = require('isomorphic-fetch');
const customMiddleware = store => next => action => {
    if(action.fetchConfig){
        fetch(action.fetchConfig.url,{
            method: action.fetchConfig.requestMethod,
            body: JSON.stringify(action.fetchConfig.data)
        }).then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        })
        .then(function(stories) {
            console.log(stories);
        }).catch((error)=>{
            console.log(error);
            console.log(action);
            next(action.fetchConfig.responseMethod(action.fetchConfig.data));
        });
    }
    
  }
  
  export default customMiddleware;

