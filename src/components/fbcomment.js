import React from 'react';
import { FacebookProvider, Comments } from 'react-facebook';
import { APP_ID, URL } from '../global';

export default class Fbcomment extends React.Component {
    render() {
        return (
            <FacebookProvider appId={APP_ID}>
                <Comments href={URL + "/room/" + this.props.slug} width="auto" />
            </FacebookProvider>
        )
    }
}