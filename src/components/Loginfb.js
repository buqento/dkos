import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';

class Loginfb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            auth: props.loginStatus,
            name: '',
            picture: ''
        }
    }

    componentDidMount() {
        // console.log('Status login facebook: asem ', this.props.messages)
    }

    responseFacebook = (response) => {
        if (response.status !== 'not_authorized') {

            this.setState({
                auth: true,
                name: response.name,
                picture: response.picture.data.url
            });
            localStorage.setItem("user", JSON.stringify(response))
            this.props.handleAuthLogin()
        }

    }

    componentClicked = () => {
        console.log('Click login btn')
    }

    render() {
        let facebookData;
        this.state.auth ?
            facebookData = (
                <div>
                    hi {this.state.name}
                    {/* <img src={this.state.picture} /> */}
                </div>)
            :
            facebookData = (

                <FacebookLogin
                    appId="2615774338658413"
                    autoLoad={true}
                    fields="name,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook} />
            );

        return (<>
            {facebookData}

        </>)
    }
}


const mapStateToProps = (state) => {
    return {
        loginStatus: state.loginStatus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAuthLogin: () => dispatch({ type: "AUTH_LOGIN" })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Loginfb);