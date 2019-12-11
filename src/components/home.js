import React, { Fragment } from 'react';
import Rooms from './rooms';
import { Route, BrowserRouter as Router, Switch, Link as RouterLink } from 'react-router-dom';

import Notfound from '../notfound';
import Detail from '../components/detail';
import Registration from '../components/registration';
import Login from '../components/Login';
import Roomadd from '../components/roomadd';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Divider } from '@material-ui/core';



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
    },
    navigation: {
        padding: 30,
        textDecoration: "none"
    }
}));

const ButtonAppBar = () => {
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem("user"))
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        localStorage.removeItem("user")
        this.props.history.push("/")
    }

    const Linktohome = React.forwardRef((props, ref) => (
        <RouterLink innerRef={ref} to="/" {...props} />
    ))

    const Linktologin = React.forwardRef((props, ref) => (
        <RouterLink innerRef={ref} to="/login" {...props} />
    ))

    return (
        <div className={classes.root}>
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <IconButton component={Linktohome} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <HomeIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        dKos
					</Typography>
                    {
                        user ?
                            (
                                <div>
                                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                        <Typography style={{ color: "white" }}>
                                            {user[0].name}
                                        </Typography>
                                    </Button>
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={handleClose}>My account</MenuItem>
                                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                    </Menu>
                                </div>

                            )
                            :
                            <Button component={Linktologin} style={{color:"white"}}>Login</Button>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}

// const Nav = () => {
//     const handleLogout = (props) => {
//         localStorage.removeItem("user")
//         // this.props.history.push(`/login`)        
//     }
//     const classes = useStyles();
//     return(<div className={classes.navigation}>
//         <Link to="/">Home</Link> |
//         <Link to="roomadd">Add Room</Link>
//         <Button onClick={handleLogout}>Logout</Button>
//     </div>)
// }

const Routing = () => {
    return (
        <div>
                    <Router>
                        <Container fixed>
                            <ButtonAppBar />
                            <Switch>
                                <Route exact path="/" component={Rooms} />
                                <Route path="/login" component={Login} />
                                <Route path="/registration" component={Registration} />
                                <Route path="/details/:handle" component={Detail} />
                                <Route path="/roomadd" component={Roomadd} />
                                <Route component={Notfound} />
                            </Switch>
                            <Divider />
                        </Container>
                    </Router>
        
        </div>
    )
}

export default Routing;