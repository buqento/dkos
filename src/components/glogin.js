import React from 'react';
import GoogleLogin from 'react-google-login';
import { GOOGLE_CLIENT_ID } from '../global';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';

export default class Glogin extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            auth: false,
            name: '',
            picture: ''
        }
    }

    responseGoogle = (response) => {
        console.log(response);
        if (response.error !== 'idpiframe_initialization_failed') {
            this.setState({
                auth: true,
                name: response.profileObj.givenName
            });
            localStorage.setItem("user", JSON.stringify(response))
        }
    }

    render() {

        const Linktoaccount = React.forwardRef((props, ref) => (
            <RouterLink innerRef={ref} to="/account" {...props} />
        ))

        let gComponent;
        this.state.auth ?
            gComponent = <Button component={Linktoaccount} color="inherit">{this.state.name}</Button>
            :
            gComponent = (
                <GoogleLogin
                    clientId={GOOGLE_CLIENT_ID}
                    buttonText="MASUK"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            );

        return (<>
            {gComponent}
        </>)
    }



}