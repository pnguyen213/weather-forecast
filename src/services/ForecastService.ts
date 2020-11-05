import { ForecastAPI, RequestGetAPI } from "../models/apiModel";
import { URL } from "../redux/constants";
import { get } from '../redux/helpers';
import { apiModelToDataModel } from '../models/adapters/DataAdapters';

export default class ForecastService {

    getLocationForecast(query: string, days?: number) {
        const requestAPI: RequestGetAPI = {
            url: `${URL.Location_Search_URL}?key=46c0b24f2a1c4ce196a43103202910&days=${days || 5}&q=${query}`
        }
        return get<ForecastAPI>(requestAPI)
            .then(forecastResponse => apiModelToDataModel(forecastResponse.data));
    }

}