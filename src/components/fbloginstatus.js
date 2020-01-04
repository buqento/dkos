import React from 'react';
import { FacebookProvider, Status } from 'react-facebook';
import Fbloginbutton from './fbloginbutton';
import Typography from '@material-ui/core/Typography';
import { APP_ID } from '../global';

export default class Fbloginstatus extends React.Component {
    render() {
        const user = JSON.parse(localStorage.getItem("user"));
        return (
            <>
                {
                    <FacebookProvider appId={APP_ID}>
                        <Status>
                            {
                                ({ loading, status }) => (

                                    <>
                                    {console.log(status)}
                                    {
                                        status !== "connected" ? <Fbloginbutton /> :
                                                                            <Typography variant="body2">
                                                                                {user.profile.first_name}
                                                                            </Typography>
                                    }
                                    </>
                                )
                            }
                        </Status>
                    </FacebookProvider>
                }
            </>
        )
    }
}