import React, { useState, useEffect, useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Paper, Theme } from '@material-ui/core';
import { debounce } from 'lodash';
import { Forecast } from '../../models/dataModel';
import { Dispatch } from 'redux';
import { DEBOUND_INPUT_DELAY } from '../../redux/constants';
import { useDebounce } from '../../redux/customHooks';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'gainsboro',
        width: 'auto',
        margin: 'initial',
    },
    paper: {
        height: 'auto',
        width: 'auto',
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
    weatherIcon: {
        paddingLeft: 'calc((100% - 64px) /2)'
    }
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
                placeholder="Placeholder"
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
                        <Grid item xs>
                            <Paper className={classes.paper}>
                                <div className={classes.datafield}>Date: {forecast.date}</div>
                                <div className={classes.datafield}>Average Temperature: {forecast.avgtemp_c}</div>
                                <div className={classes.datafield}>Maximum Temperature: {forecast.maxtemp_c}</div>
                                <div className={classes.datafield}>Minimum Temperature: {forecast.mintemp_c}</div>
                                <div className={classes.datafield}>Condition: {forecast.conditionText}</div>
                                <div><img className={classes.weatherIcon} src={forecast.conditionIcon}></img></div>
                            </Paper>
                        </Grid>
                    ))}
            </Grid>
        </div>
    )
}