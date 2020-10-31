import { NamedTupleMember } from "typescript";

/** ACTION TYPES */

export const ACTION_TYPES = {
    SET_WOEID: 'SET_WOEID'
}



/** STATE TYPES */

export interface RequestGetAPI {
    url: string;
}

export interface LocationData {
    title: string;
    location_types: string;
    latt_long: string;
    woeid: number;
    distance?: number;
}

export interface WeatherData {
    id: number;
    weather_state_name: string;
    weather_state_abbr: string;
    wind_direction_compass: string;
    created: string;
    applicable_date: string;
    min_temp: number;
    max_temp: number;
    the_temp: number;
    wind_speed: number;
    wind_direction: number;
    air_pressure: number;
    humidity: number;
    visibility: number;
    predictability: number;
}

export interface UIState {
    woeid: string;
    recentForecasts: WeatherData[];
}

export interface StoreState {
    ui: UIState;
}