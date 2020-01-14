import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Rooms from './rooms';
import Notfound from '../notfound';
import Detail from './detail';
import Roomadd from './roomadd';
import Account from './account';
import Nav from './nav';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Fab from '@material-ui/core/Fab';
import Helmet from 'react-helmet';
const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const FabAction = (props) => {
  const classes = useStyles();
  return (<div>
    <Fab color="secondary" aria-label="add" className={classes.fab} href="https://wa.me/6285770825336?text=Hi Tantekos, Saya ingin mempromosikan kos.">
      <WhatsAppIcon style={{ color: "#25d366" }} />
    </Fab>
  </div>)
}

export default class Home extends React.Component {
  render() {
    return (<div>

      <Helmet>
        <title>Tantekos - Cari Kos Menjadi Mudah & Terpercaya</title>
      </Helmet>

      <Router>
        <Container fixed>
          <Nav />
          <Switch>
            <Route exact path="/" component={Rooms} />
            <Route path="/room/:slug" component={Detail} />
            <Route path="/account" component={Account} />
            <Route path="/roomadd" component={Roomadd} />
            <Route component={Notfound} />
          </Switch>
        </Container>
      </Router>
      <FabAction />
    </div>)
  }
}