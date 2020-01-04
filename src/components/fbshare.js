import React from 'react';
import { FacebookShareButton } from 'react-share';
import ShareIcon from '@material-ui/icons/Share';

export default class Fbshare extends React.Component {
    render() {
        const url = `https://tantekos.com/room/${this.props.id}`;
        const quote = this.props.room_title + ' - ' + this.props.description;
        const hashtag = "#tantekos";
        const image_url = this.props.image_url;
        return (
            <FacebookShareButton url={url} imageURL={image_url} quote={quote} hashtag={hashtag}>
                <ShareIcon color="action" />
            </FacebookShareButton>
        )
    }
}
