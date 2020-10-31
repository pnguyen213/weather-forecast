import { applyMiddleware, createStore, Store } from "redux";
import reduxThunk from 'redux-thunk';
import rootReducer from './reducer';
import { StoreState } from "./types";

const initialState: StoreState = {
    ui: {
        woeid: '',
        recentForecasts: []
    }
}


export function configureStore() {
    let middleware = applyMiddleware(reduxThunk);

    const store = createStore(rootReducer, initialState, middleware);
    return store;
}