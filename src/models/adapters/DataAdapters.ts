import { ForecastAPI } from '../apiModel';
import { Forecast } from '../dataModel';

export const apiModelToDataModel = (api: ForecastAPI): Forecast => {
    const forecastData: Forecast = {
        location: {
            country: api.location.country,
            name: api.location.name,
            lat: api.location.lat,
            lon: api.location.lon,
            localtime: api.location.localtime
        },
        forecast: api.forecast.forecastday.map(apiDay => ({
            date: apiDay.date,
            avgtemp_c: apiDay.day.avgtemp_c,
            maxtemp_c: apiDay.day.maxtemp_c,
            mintemp_c: apiDay.day.mintemp_c,
            conditionIcon: apiDay.day.condition.icon,
            conditionText: apiDay.day.condition.text,
        }))
    }
    return forecastData;
}