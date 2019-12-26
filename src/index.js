import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, BrowserRouter as Router , Route } from 'react-router-dom';
import Routes from './common/routes';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createSagaMiddleWare from 'redux-saga';
import { rootReducer, rootSaga } from './reducers/index';
//import custommiddleware from './common/custommiddleware';
import { createStore, applyMiddleware, compose } from 'redux';
import ErrorBoundary from './common/ErrorBoundary.jsx';


const root = document.getElementById('root');

const sagaMiddleWare = createSagaMiddleWare();
const middleWare = applyMiddleware(thunk,logger,sagaMiddleWare);
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(rootReducer,{},composeEnhancers(middleWare));
sagaMiddleWare.run(rootSaga);

 

ReactDOM.render(
    <ErrorBoundary>
        <Provider store={store}>
            <Router basename={process.env.PUBLIC_URL}>
                <Switch>
                    {
                        Routes.map((props,key)=> 
                            <Route path={props.path} component={props.component} exact={props.exact} key={key} />)
                    })
                </Switch>
            </Router>
        </Provider>
    </ErrorBoundary>,
root);