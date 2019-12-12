import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Moment from 'react-moment';

const comments = (props) => {
  return(
        <List>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={props.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={props.commentName}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className="display: inline"
                    color="textPrimary"
                  >
                    {props.commentText}
                  </Typography>
                  — <Moment fromNow>{props.createdAt}</Moment>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" />
        </List>
  )
}

export default comments;