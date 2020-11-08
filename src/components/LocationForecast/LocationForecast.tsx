import React, { useState, useEffect, useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Paper, Theme } from '@material-ui/core';
import { Forecast } from '../../models/dataModel';
import { Dispatch } from 'redux';
import { useDebounce } from '../../redux/customHooks';
import DayForecast from '../DayForecast/DayForecast';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'gainsboro',
        width: 'auto',
        margin: 'initial',
    },
    datafield: {
        fontFamily: 'cursive',
        color: 'cornflowerblue',
        fontSize: 'x-large',
        textAlign: 'center'
    },
    control: {
        padding: theme.spacing(2),
    },
    locationInput: {
        margin: '40px 40px 40px 20px'
    },
}));

interface LocationForecastProps {
    recentForecasts: Forecast | null;
    getLocationForecastAction: (query: string) => (dispatch: Dispatch) => Promise<void>;
}

export default function LocationForecast(props: LocationForecastProps) {
    const [locationQuery, setLocationQuery] = useState('');
    const classes = useStyles();

    const debouncedGetLocation = useDebounce((locationQuery: string) => props.getLocationForecastAction(locationQuery));

    function handleChangeQuery(e: any) {
        setLocationQuery(e.target.value);
    }

    useEffect(() => {
        if (locationQuery !== '')
            debouncedGetLocation(locationQuery);
    }, [locationQuery]);

    return (
        <div>
            <TextField
                id="outlined-textarea"
                label=""
                placeholder="Enter location"
                variant="outlined"
                className={classes.locationInput}
                value={locationQuery}
                onChange={handleChangeQuery}
            />
            {props.recentForecasts && props.recentForecasts.location &&
                <Paper>
                    <div className={classes.datafield}>Country: {props.recentForecasts.location.country}</div>
                    <div className={classes.datafield}>Name: {props.recentForecasts.location.name}</div>
                    <div className={classes.datafield}>Local time: {props.recentForecasts.location.localtime}</div>
                    <div className={classes.datafield}>Lattitude: {props.recentForecasts.location.lat}</div>
                    <div className={classes.datafield}>Longtitude: {props.recentForecasts.location.lon}</div>
                </Paper>
            }
            <Grid container className={classes.root} spacing={4}>
                {props.recentForecasts
                    && props.recentForecasts.forecast
                    && props.recentForecasts.forecast.length
                    && props.recentForecasts.forecast.map(forecast => (
                        <Grid key={forecast.date} item xs>
                            <DayForecast forecast={forecast} />
                        </Grid>
                    ))}
            </Grid>
        </div>
    )
}