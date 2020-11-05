import { makeStyles, Paper, Theme } from '@material-ui/core';
import React from 'react';
import { ForecastDay } from '../../models/dataModel';

interface ForecastDayProps {
    forecast: ForecastDay;
}

const useStyles = makeStyles((theme: Theme) => ({
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
    weatherIcon: {
        paddingLeft: 'calc((100% - 64px) /2)'
    }
}));

export default function DayForecast(props: ForecastDayProps) {

    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <div className={classes.datafield}>Date: {props.forecast.date}</div>
            <div className={classes.datafield}>Average Temperature: {props.forecast.avgtemp_c}</div>
            <div className={classes.datafield}>Maximum Temperature: {props.forecast.maxtemp_c}</div>
            <div className={classes.datafield}>Minimum Temperature: {props.forecast.mintemp_c}</div>
            <div className={classes.datafield}>Condition: {props.forecast.conditionText}</div>
            <div><img className={classes.weatherIcon} src={props.forecast.conditionIcon}></img></div>
        </Paper>
    )

}