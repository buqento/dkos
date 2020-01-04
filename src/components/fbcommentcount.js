import React from 'react';
import { FacebookProvider, CommentsCount } from 'react-facebook';

export default class Fbcommentcount extends React.Component {
    render() {
        return (
            <FacebookProvider appId="2615774338658413">
                <CommentsCount href={"https://tantekos.com/room/" + this.props.id} />
            </FacebookProvider>
        )
    }
}