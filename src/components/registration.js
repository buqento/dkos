import React from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        marginBottom: theme.spacing(3)
    },
}));

const Registrationview = (props) => {
    const classes = useStyles();
    return (<div>
        <Paper className={classes.root}>
            <Typography variant="h5">Create an account. It's quick and easy.</Typography>

            <form onSubmit={props.handleRegister}>
                <TextField
                    margin="dense"
                    label="Name"
                    name="name"
                    value={props.name}
                    onChange={props.handleChange}
                    fullWidth
                    required
                />
                <TextField
                    margin="dense"
                    label="Email"
                    type="email"
                    name="email"
                    value={props.email}
                    onChange={props.handleChange}
                    fullWidth
                    required
                />
                <TextField
                    margin="dense"
                    label="Password"
                    fullWidth
                    type="password"
                    name="password"
                    value={props.password}
                    onChange={props.handleChange}
                    required
                />
                <Typography variant="caption" color="textSecondary">
                    By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy.
                    You may receive SMS notifications from us and can opt out at any time.
                </Typography>
                <Divider />
                <br />
                <Button
                    type="submit"
                    variant="outlined"
                    color="primary">
                    Sign Up
            </Button>
            </form>
        </Paper>
    </div>)
}

export default class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: ""
        }
        this.handleRegister = this.handleRegister.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleRegister(event) {
        const { name, email, password } = this.state;
        axios.post('https://5de747e7b1ad690014a4e0d2.mockapi.io/users',
            { name: name, email: email, password: password },
            { headers: { 'Content-Type': 'application/json' } },
            { withCredentials: true }
        ).then(response => {
            if (response.status === 201) {
                alert('Welcome ' + this.state.name)
            }
        }).catch(error => {
            console.log('Error: ', error)
        })
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (<div>
            <Registrationview
                name={this.state.name}
                email={this.state.email}
                password={this.state.password}
                handleChange={this.handleChange}
                handleRegister={this.handleRegister}
            />
        </div>)
    }
}