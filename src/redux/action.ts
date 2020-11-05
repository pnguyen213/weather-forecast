import { Dispatch } from "redux"
import ForecastService from "../services/ForecastService";
import { ACTION_TYPES, Error } from "./types"

const forecastService = new ForecastService();

export const getLocationForecastAction = (query: string) => (dispatch: Dispatch) =>
    forecastService.getLocationForecast(query)
        .then(response => {
            dispatch({
                type: ACTION_TYPES.SAVE_FORECAST_DATA,
                payload: response
            })
        });

export const showError = (error: Error) => ({
    type: ACTION_TYPES.SHOW_API_ERROR,
    payload: error
});

export const clearError = () => ({
    type: ACTION_TYPES.CLEAR_ERROR
});