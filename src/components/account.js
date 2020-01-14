import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { GOOGLE_CLIENT_ID } from '../global';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
}));

export default function Account() {

  const classes = useStyles();
  const logout = (response) => { console.log(response) }
  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <div className={classes.root}>

    {
      // cek item user pada localstorage
      user &&
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {user.profileObj.givenName}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {user.profileObj.email}
            </Typography>
            <Divider />
            <br />
            <GoogleLogout clientId={GOOGLE_CLIENT_ID} buttonText="KELUAR" onLogoutSuccess={logout}></GoogleLogout>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image={user.profileObj.imageUrl}
          title={user.profileObj.givenName}
        />
      </Card> 
    }

    </div>
  )
}