import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Rooms from './rooms';
import Notfound from '../notfound';
import Detail from './detail';
import Roomadd from './roomadd';
import Account from './account';
import Nav from './nav';
import Helmet from 'react-helmet';
import { Box } from '@material-ui/core';
import Footer from './footer';

export default class Home extends React.Component {
  render() {
    return (<Box>
      <Helmet>
        <title>Tantekos - Cari Kos Menjadi Mudah &amp; Terpercaya</title>
      </Helmet>

      <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Rooms} />
            <Route path="/room/:slug" component={Detail} />
            <Route path="/account" component={Account} />
            <Route path="/roomadd" component={Roomadd} />
            <Route component={Notfound} />
          </Switch>
          <Footer />
      </Router>
    </Box>)
  }
}