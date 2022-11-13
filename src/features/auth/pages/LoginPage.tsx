import { Box, Button, makeStyles, Paper, Typography } from '@material-ui/core';
import * as React from 'react';

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

    return (
        <div className={classes.root} >
            <Paper elevation={1} className={classes.box}>
                <Typography variant='h5' component="h1">Student Management</Typography>
                {/* 4*8 = 32px */}
                <Box mt={4}>
                    <Button fullWidth variant="contained" color="primary"> 
                        Fake login
                    </Button>
                </Box>
            </Paper>
        </div>
    )
}