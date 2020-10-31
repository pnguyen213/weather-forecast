import { Dispatch } from "redux"
import { getWoeid } from "./helpers"
import { StoreState, ACTION_TYPES } from "./types"


export const getLocationWoeid = (query: string) => (dispatch: Dispatch) => getWoeid(query)
    .then(response => {
        const woeid = response.data.woeid || '';
        dispatch({
            type: ACTION_TYPES.SET_WOEID,
            payload: woeid
        })
    });