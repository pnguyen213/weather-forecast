import React, { useState, useEffect, useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Paper, Theme } from '@material-ui/core';
import { debounce } from 'lodash';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'gainsboro',
        width: 'auto',
        margin: 'initial'
    },
    paper: {
        height: 140,
        width: 'auto',
    },
    control: {
        padding: theme.spacing(2),
    },
    locationInput: {
        margin: '40px 40px 40px 20px'
    }
}));

export default function LocationForecast(props: any) {
    const [locationQuery, setLocationQuery] = useState('');
    const classes = useStyles();

    const debouncedGetLocation = useCallback(
        debounce(locationQuery => props.getLocationWoeid(locationQuery), 1000),
        []
    );

    function handleChangeQuery(e: any) {
        setLocationQuery(e.target.value);
        debouncedGetLocation(e.target.value);
    }

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
            <Grid container className={classes.root} spacing={4}>
                <Grid item xs>
                    <Paper className={classes.paper} />
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper} />
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper} />
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper} />
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper} />
                </Grid>
            </Grid>
        </div>
    )
}