import { combineReducers } from "redux";
import { ACTION_TYPES, ErrorState, UIState, } from "./types";

const defaultUIState: UIState = {
    recentForecasts: null
}


function uiReducer(state: UIState = defaultUIState, action: any) {
    switch (action.type) {
        case ACTION_TYPES.SAVE_FORECAST_DATA: {
            return { ...state,
                recentForecasts: action.payload
            };
        }
        case ACTION_TYPES.SHOW_API_ERROR: {
            return { ...state,
                recentForecasts: null
            };
        }
        default:
            return state;
    }
}

const defaultErrorState: ErrorState = {
    apiError: null
}

function errorReducer(state: ErrorState = defaultErrorState, action: any) {
    switch (action.type) {
        case ACTION_TYPES.SHOW_API_ERROR: {
            return { ...state,
                apiError: action.payload
            };
        }
        case ACTION_TYPES.CLEAR_ERROR: {
            return { ...state,
                apiError: null
            };
        }
        default:
            return state;
    }
}

export default combineReducers({
    ui: uiReducer,
    error: errorReducer
});