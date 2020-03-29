import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Typography, AppBar, Toolbar } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles(theme => ({
    root: {
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

    const classes = useStyles();
    return (
        <div className={classes.root}>

            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <IconButton component={Linktohome} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <HomeIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        TANTEKOS
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default class Nav extends React.Component {
    render() { return <Navbar loginStatus={this.props.loginStatus} handleStatus={this.props.handleStatus} /> }
}