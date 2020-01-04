import React from 'react';
import { FacebookProvider, LoginButton } from 'react-facebook';
import { APP_ID } from '../global';

export default class Fbloginbutton extends React.Component {

    handleResponse = (data) => {
        localStorage.setItem("user", JSON.stringify(data))
    }

    handleError = (error) => {
        alert(error)
    }

    constructor(props) {
        super(props);
        this.state = {
            _isMounted: true
        }
    }

    render() {
        return (
            <div>
                {
                    this.state._isMounted &&
                        <FacebookProvider appId={APP_ID}>
                            <LoginButton
                                scope="email"
                                onCompleted={this.handleResponse}
                                onError={this.handleError}>
                                Masuk dengan facebook
                        </LoginButton>
                        </FacebookProvider>
                }
            </div>
        )
    }
}