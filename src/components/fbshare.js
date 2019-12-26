import React from 'react';
import { FacebookShareButton } from 'react-share';
import ShareIcon from '@material-ui/icons/Share';
import Button from '@material-ui/core/Button';

export default class Fbshare extends React.Component {
    render() {
        const url = "https://buqento.github.io/room/" + this.props.id + "/" + this.props.room_title;
        const quote = this.props.room_title + ' - ' + this.props.description;
        const hashtag = "#Manggurebe";
        return (
            <FacebookShareButton url={url} quote={quote} hashtag={hashtag}>
                <Button><ShareIcon color="action" /></Button>
            </FacebookShareButton>
        )
    }
}
