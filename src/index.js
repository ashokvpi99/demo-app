import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxLogger from 'redux-logger';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';

// const initState = { post : [] };

// function myReducer(state = initState, action) {

//     if(action.type === 'ADD_POST')
//         return {
//             ...state,
//             post: [...state.post, action.data]
//         }

// }

const Store = createStore(rootReducer, applyMiddleware(reduxLogger, thunk));

// Store.dispatch({type: "ADD_POST", data: 'Hello'})
// Store.dispatch({type: "ADD_POST", data: 'World'})

// Store.subscribe(() => {
//     console.log('State Updated');
//     console.log(Store.getState());
// })

ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
