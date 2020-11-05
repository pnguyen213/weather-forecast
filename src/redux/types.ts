

/** ACTION TYPES */

import { Forecast } from "../models/dataModel";

export const ACTION_TYPES = {
    SAVE_FORECAST_DATA: 'SAVE_FORECAST_DATA',
    SHOW_API_ERROR: 'SHOW_API_ERROR',
    CLEAR_ERROR: 'CLEAR_ERROR'
}


/** STATE TYPES */

export interface UIState {
    recentForecasts: Forecast | null;
}

export interface Error {
    errorCode: number;
    errorMessage: string;
}

export interface ErrorState {
    apiError: Error | null;
}

export interface StoreState {
    ui: UIState;
    error: ErrorState;
}