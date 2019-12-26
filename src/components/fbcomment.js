import React from 'react';
import { FacebookProvider, Comments } from 'react-facebook';

export default class Fbcomment extends React.Component {
    render() {
        return (
            <FacebookProvider appId="2615774338658413">
                <Comments href={"https://marinyo.com/room/" + this.props.id} width="auto" />
            </FacebookProvider>
        )
    }
}