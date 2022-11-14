import { Box, Button, CircularProgress, makeStyles, Paper, Typography } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import * as React from 'react';
import { authActions, selectIsLogging } from '../authSlice';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
    },

    box: {
        padding: theme.spacing(2),
    }
}));

export function LoginPage() {
    const classes = useStyles();
    const dispatch = useAppDispatch();

    const isLogging = useAppSelector(selectIsLogging)

    const handleLoginClick = () => {
        //TODO: get username + password from login form
        dispatch(authActions.login({
            username: 'shaun',
            password: '123456aA@',
        }))
    }

    const handleLogoutClick = () => {
        dispatch(authActions.logOut())
    }
    return (
        <div className={classes.root} >
            <Paper elevation={1} className={classes.box}>
                <Typography variant='h5' component="h1">Student Management</Typography>
                {/* 4*8 = 32px */}
                <Box sx={{ mt: 4 }}>
                    <Button fullWidth variant="contained" color="primary" onClick={handleLoginClick}> 
                    {isLogging && <CircularProgress size={20} color="secondary"/> } &nbsp; Fake login
                    </Button>
                    <Button fullWidth variant="contained" color="primary" onClick={handleLogoutClick}> 
                         Fake logout
                    </Button>
                </Box>
            </Paper>
        </div>
    )
}