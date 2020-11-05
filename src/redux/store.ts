import { applyMiddleware, createStore, Store } from "redux";
import reduxThunk from 'redux-thunk';
import { apiInterceptors } from "./helpers";
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { StoreState } from "./types";

const initialState: StoreState = {
    ui: {
        recentForecasts: null
    },
    error: {
        apiError: null
    }
}


export function configureStore() {
    let middleware = applyMiddleware(reduxThunk);
    const composeEnhancers = composeWithDevTools({});
    middleware = composeEnhancers(middleware);

    const store = createStore(rootReducer, initialState, middleware);
    apiInterceptors(store.dispatch);
    return store;
}