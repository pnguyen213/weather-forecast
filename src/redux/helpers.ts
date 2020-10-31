import axios, { AxiosPromise, AxiosRequestConfig } from "axios";
import { LocationData, RequestGetAPI } from './types';
import { URL, WEATHER_SERVER_URL } from './constants';

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

export function getWoeid(query: string) {
    const requestAPI: RequestGetAPI = {
        url: `${URL.Location_Search_URL}?key=46c0b24f2a1c4ce196a43103202910&days=5&q=${query}`
    }
    return get<LocationData>(requestAPI);
}