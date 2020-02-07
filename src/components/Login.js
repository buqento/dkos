import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Registration from './registration';
import Loginfb from './Loginfb';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}));

const Viewlogin = (props) => {
    const classes = useStyles();

    return (<div>

        {props.error && <h3 onClick={props.handleDissmis}>{props.error}</h3>}
        {props.loading && <LinearProgress />}
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


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: 'buqento@gmail.com',
            password: 'buqento',
            userdata: [],
            error: '',
            loading: false
        }
        this.handleLogin = this.handleLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleDissmis() {
        this.setState({ error: '' })
    }

    componentDidMount() {
        console.log('Login component')
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    async handleLogin(event) {

        if (!this.state.email) {
            return this.setState({ error: 'Email required!' })
        }
        const filter = this.state.email
        event.preventDefault()
        try {
            this.setState({ loading: true })
            await fetch(`https://5de747e7b1ad690014a4e0d2.mockapi.io/users?search=${filter}`)
                .then(response => response.json())
                .then(data => {
                    if (data.length === 1) {
                        this.setState({ userdata: data })
                        this.state.userdata.map(user => {
                            let userpwd = user.password
                            if (userpwd === this.state.password) {
                                localStorage.setItem("user", JSON.stringify(this.state.userdata))
                                this.props.handleAuthLogin()
                                this.props.history.push("/")
                            } else {
                                alert('username password do not match!')
                            }
                        })
                    } else {
                        alert('username password do not match!')
                    }
                })
            this.setState({ loading: false })

        } catch (e) {
            alert(e.message)
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <Grid container spacing={3}>

                        <Grid item md={6}>
                            <Registration />
                        </Grid>
                        <Grid item md={6}>
                            <Viewlogin
                                email={this.state.email}
                                password={this.state.password}
                                error={this.state.error}
                                loading={this.state.loading}
                                handleChange={this.handleChange}
                                handleLogin={this.handleLogin}
                                handleDissmis={this.handleDissmis}
                            />

                            {this.props.messages}
                            <Button onClick={this.props.handleMessages}>
                                Add new message
                            </Button>

                            <Loginfb />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleMessages: () => dispatch({ type: "MESSAGE", p: 5 }),
        handleAuthLogin: () => dispatch({ type: "AUTH_LOGIN" })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);