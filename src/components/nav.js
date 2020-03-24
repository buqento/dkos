import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Glogin from './glogin';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Typography, AppBar, Toolbar } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        // flexGrow: 1,
        marginTop: 70
    },
    title: {
        flexGrow: 1,
    }
}));

const Navbar = (props) => {
    const Linktohome = React.forwardRef((props, ref) => (
        <RouterLink innerRef={ref} to="/" {...props} />
    ))
    const Linktoaccount = React.forwardRef((props, ref) => (
        <RouterLink innerRef={ref} to="/account" {...props} />
    ))
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem("user"));
    return (
        <div className={classes.root}>

            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <IconButton component={Linktohome} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <HomeIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Tantekos
                    </Typography>
                    {
                        user === null ? <Glogin /> :
                            <Button component={Linktoaccount} color="inherit">{user.profileObj.givenName}</Button>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default class Nav extends React.Component {
    render() { return <Navbar loginStatus={this.props.loginStatus} handleStatus={this.props.handleStatus} /> }
}