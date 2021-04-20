import { createStore, applyMiddleware, compose } from 'redux';
import Thunk from 'redux-thunk';
import reducers from '../reducers';

function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state)
        // const serializedState = ""
        localStorage.setItem('bithashex124', serializedState)
    }catch(e){
        console.log(e);
    }
}

function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem('bithashex124')
        if(serializedState === null) return undefined
        return JSON.parse(serializedState)
    }catch (e) {
        console.log(e)
        return undefined
    }
}

const persistedState = loadFromLocalStorage()

export function configureStore(initialState) {

    const store = createStore(reducers, persistedState, compose(
        applyMiddleware(Thunk),
    
        //For working redux dev tools in chrome (https://github.com/zalmoxisus/redux-devtools-extension)
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : function (f) {
            return f;
        }
    ));

    const unsubscribe = store.subscribe(() => {
        const state = store.getState();
        saveToLocalStorage(state);
    });
    
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers/index', () => {
            const nextRootReducer = require('../reducers/index');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
