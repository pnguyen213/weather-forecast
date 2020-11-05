import { ForecastDay } from "./dataModel";

export interface RequestGetAPI {
    url: string;
}

export interface LocationAPI {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
}

export interface ForecastDayAPI {
    date: string;
    date_epoch: number;
    day: {
        maxtemp_c: number;

        maxtemp_f: number;
        mintemp_c: number;
        mintemp_f: number;
        avgtemp_c: number;
        avgtemp_f: number;
        maxwind_mph: number;
        maxwind_kph: number;
        totalprecip_mm: number;
        totalprecip_in: number;
        avgvis_km: number;
        avgvis_miles: number;
        avghumidity: number;
        daily_will_it_rain: number;
        daily_chance_of_rain: number;
        daily_will_it_snow: number;
        daily_chance_of_snow: number;
        condition: {
            text: string;
            icon: string;
            code: number;
        },
        uv: number;
    },
    astro: Object;
    hour: Object[];
}

export interface ForecastAPI {
    location: LocationAPI;
    current: Object;
    forecast: {
        forecastday: ForecastDayAPI[];
    }
    alert: Object;
}