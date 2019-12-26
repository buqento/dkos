import React from 'react';
import { FacebookProvider, LoginButton } from 'react-facebook';

export default class Fbloginbutton extends React.Component {

    handleResponse = (data) => {
        localStorage.setItem("user", JSON.stringify(data))
    }

    handleError = (error) => {
        console.log(error)
    }

    constructor(props) {
        super(props);
        this.state = {
            _isMounted: false
        }
        console.log("constructor")
    }
    componentWillMount() {
        console.log("componentWillMount")
        this.setState({ _isMounted: false })
    }

    componentDidMount() {
        console.log("componentDidMount")
        this.setState({ _isMounted: true })
    }

    render() {
        return (
            <div>
                {
                    this.state._isMounted &&

                    <FacebookProvider appId="2615774338658413" style={{ color: 'red' }}>
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