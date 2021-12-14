import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, Connect } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import ThunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { searchRobots, reqRobots } from './reducers';


//create logger
const logger = createLogger();

//combine all reducers 
const rootReducer = combineReducers({ searchRobots, reqRobots })
//create Store 

const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware, logger))
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

registerServiceWorker();
