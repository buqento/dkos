import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Fbloginstatus from '../components/fbloginstatus';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Typography, AppBar, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: 90
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    }
}));

const Navbar = (props) => {
    const Linktohome = React.forwardRef((props, ref) => (
        <RouterLink innerRef={ref} to="/" {...props} />
    ))
    const classes = useStyles();
    return (

        <div className={classes.root}>
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <IconButton component={Linktohome} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Tantekos
                    </Typography>
                    <Fbloginstatus />
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default class Nav extends React.Component {
    render() { return <Navbar /> }
}