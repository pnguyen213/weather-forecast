export interface Location {
    name: string;
    country: string;
    lat: number;
    lon: number;
    localtime: string;
}

export interface ForecastDay {
    date: string;
    maxtemp_c: number;			
    mintemp_c: number;
    avgtemp_c: number;
    conditionText: string;
    conditionIcon: string;
}

export interface Forecast {
    location: Location;
    forecast: ForecastDay[];
}