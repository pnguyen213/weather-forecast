import { combineReducers } from "redux";
import { UIState } from "./types";

const defaultUIState: UIState = {
    woeid: '',
    recentForecasts: []
}


function uiReducer(state: UIState = defaultUIState, action: any) {
    switch(action.type) {
        default:
            return state;
    }
}

export default combineReducers({
    ui: uiReducer
});