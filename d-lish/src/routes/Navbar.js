import React from 'react';
import AppBar from '@material-ui/core/AppBar';
//import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( ( theme ) => ( {
    icon: {
        backgroundColor: theme.palette.warning.main,
        marginRight: theme.spacing( 2 ),
    }
} ) );

export default function Navbar () {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar className={classes.icon} position="relative">
                <Toolbar>
                    <CameraIcon className={classes.icon} />
                    <Typography variant="h6" color="inherit" noWrap>
                        D-Lish
            </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment> 
    );
}