import React from 'react';
import { FacebookShareButton } from 'react-share';

export default class Fbshare extends React.Component {
    render() {
        const url = `https://tantekos.com/room/${this.props.slug}`;
        const quote = this.props.room_title + ' - ' + this.props.description;
        const hashtag = "#tantekos";
        const image_url = this.props.image_url;
        return (
            <FacebookShareButton url={url} imageURL={image_url} quote={quote} hashtag={hashtag}>
                Bagikan
            </FacebookShareButton>
        )
    }
}
