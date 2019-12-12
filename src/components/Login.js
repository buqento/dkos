import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Registration from './registration';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}));

const Viewlogin = (props) => {
    const classes = useStyles();

    return (<div>

        {
            props.error &&

            <h3 onClick={props.handleDissmis}>{props.error}</h3>

        }
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
            error: ''
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
                                handleChange={this.handleChange}
                                handleLogin={this.handleLogin}
                                handleDissmis={this.handleDissmis}
                            />

                            {this.props.messages}
                            <Button onClick={this.props.handleMessages}>
                                Add new message
                            </Button>
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
        handleMessages: () => dispatch({ type: "MESSAGE" }),
        handleAuthLogin: () => dispatch({type: "AUTH_LOGIN"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);