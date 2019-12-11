import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Registration from './registration';
import { Grid } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(10),
        padding: theme.spacing(3, 2),
    },
}));

const Viewlogin = (props) => {
    const classes = useStyles();
    return (<div>
        <Paper className={classes.root}>
            <form>
                <TextField
                    variant="outlined"
                    margin="dense"
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={props.email}
                    onChange={props.handleChange}
                    fullWidth
                    required
                />
                <TextField
                    variant="outlined"
                    margin="dense"
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={props.password}
                    onChange={props.handleChange}
                    fullWidth
                    required
                />
                <Button
                    onClick={props.handleLogin}
                    variant="contained"
                    color="primary">
                    Login
                </Button>
            </form>
        </Paper>
    </div>)
}


export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: 'buqento@gmail.com',
            password: 'buqento',
            userdata: [],
            isLogin: false
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.state.isLogin ? console.log('Login') : console.log('Not login')
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    async handleLogin(event) {
        const filter = this.state.email
        event.preventDefault()
        try {
            await fetch(`https://5de747e7b1ad690014a4e0d2.mockapi.io/users?search=${filter}`)
                .then(response => response.json())
                .then(data => {
                    if (data.length === 1) {
                        this.setState({ userdata: data })
                        this.state.userdata.map(user => {
                            let userpwd = user.password
                            if (userpwd === this.state.password) {
                                localStorage.setItem("user", JSON.stringify(this.state.userdata))
                                // this.setState({ isLogin: true })
                                this.props.history.push("/");
                            } else {
                                alert('username password do not match!')
                            }
                        })
                    } else {
                        alert('username password do not match!')
                    }
                })

        } catch (e) {
            alert(e.message)
        }
    }

    handleLogin_(event) {
        event.preventDefault();
        const filter = this.state.email
        fetch(`https://5de747e7b1ad690014a4e0d2.mockapi.io/users?search=${filter}`)
            .then(response => response.json())
            .then(data => {
                if (data.length === 1) {
                    this.setState({ userdata: data })
                    this.state.userdata.map(user => {
                        let userpwd = user.password
                        if (userpwd === this.state.password) {
                            localStorage.setItem("user", JSON.stringify(this.state.userdata))
                            this.setState({ isLogin: true })
                        } else {
                            alert('username password do not match!')
                        }
                    })
                } else {
                    alert('username password do not match!')
                }
            })
    }

    render() {
        return (
            <div>
                {/* <AppBar position="fixed" color="primary">
                    <Toolbar>
                        <Typography variant="h6">dKos</Typography>
                    </Toolbar>
                </AppBar> */}
                <Container>
                    <Grid container spacing={3}>

                        <Grid item md={6}>
                            <Registration />
                        </Grid>
                        <Grid item md={6}>
                            <Viewlogin
                                email={this.state.email}
                                password={this.state.password}
                                handleChange={this.handleChange}
                                handleLogin={this.handleLogin}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }
}