import React from 'react';
import { FacebookProvider, Status } from 'react-facebook';
import Fbloginbutton from './fbloginbutton';
import Typography from '@material-ui/core/Typography';

export default class Fbloginstatus extends React.Component {

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
        const user = JSON.parse(localStorage.getItem("user"));
        return (
            <div>
                {
                    this.state._isMounted &&
                    <FacebookProvider appId="2615774338658413">
                        <Status>
                            {
                                ({ status }) => (
                                    status !== "connected" ? <Fbloginbutton /> :
                                        <Typography variant="body2">
                                            {user.profile.first_name}
                                        </Typography>
                                )
                            }
                        </Status>
                    </FacebookProvider>
                }
            </div>
        )
    }
}