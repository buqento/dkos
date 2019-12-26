import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Fbloginstatus from '../components/fbloginstatus';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from '@material-ui/icons/Home';

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
                        <HomeIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Manggurebe
                    </Typography>
                    <Fbloginstatus />
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default class Nav extends React.Component {
    render() {return <Navbar />}
}