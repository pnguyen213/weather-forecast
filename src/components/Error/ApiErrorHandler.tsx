import { makeStyles, Theme } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import React, { ReactNode, useState } from 'react';
import { Error } from '../../redux/types';

interface AlertProps {
    onClose: () => void;
    children: string;
    severity: "success" | "info" | "warning" | "error" | undefined;
}

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

interface APIErrorHandlerProps {
    error: Error | null;
    clearError: () => void;
}

export default function ApiErrorHandler(props: APIErrorHandlerProps) {
    const classes = useStyles();
    
    function handleClose() {
        props.clearError();
    }

    return (
        <div className={classes.root}>
            <Snackbar open={!!props.error} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    {props.error?.errorMessage || ''}
                </Alert>
            </Snackbar>
        </div>
    )
}