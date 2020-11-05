import axios, { AxiosPromise, AxiosRequestConfig } from "axios";
import { Dispatch } from "redux";
import { RequestGetAPI } from "../models/apiModel";
import { showError } from "./action";
import { URL, WEATHER_SERVER_URL } from './constants';
import { Error } from "./types";

export function get<T>(request: RequestGetAPI): AxiosPromise<T> {
    const req: AxiosRequestConfig = {
        url: WEATHER_SERVER_URL + request.url,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*'
        },
        responseType: 'json',
    };
    return axios(req);
}

export function apiInterceptors(dispatch: Dispatch): void {
    axios.interceptors.response.use(
        (next) => {
            return Promise.resolve(next);
        },
        (error) => {
            const axiosError = error.response.data.error;
            const apiError: Error = {
                errorCode: axiosError.code,
                errorMessage: axiosError.message
            }
            dispatch(showError(apiError));
            return Promise.reject(error);
        }
    );
}