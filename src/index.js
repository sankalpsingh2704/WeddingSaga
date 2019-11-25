import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, BrowserRouter as Router , Route } from 'react-router-dom';
import Routes from './common/routes';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducers/index';
import custommiddleware from './common/custommiddleware';
import { createStore, applyMiddleware } from 'redux';
import ErrorBoundary from './common/ErrorBoundary.jsx';

const root = document.getElementById('root');
const store = createStore(reducer,applyMiddleware(thunk,logger,custommiddleware));
console.log(process.env.PUBLIC_URL);
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