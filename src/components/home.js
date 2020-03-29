import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Kos from './kos';
import Kontrakan from './kontrakan';
import Notfound from '../notfound';
import Detail from './detail';
import Roomadd from './roomadd';
import Account from './account';
import Nav from './nav';
import Helmet from 'react-helmet';
import { Box } from '@material-ui/core';
import Footer from './footer';
import Dashboard from './dashboard';
import Cart from '../components/cart';
// import Product from '../components/cart/product';
import Homes from './homes';

export default class Home extends React.Component {

  render() {
    return (<Box m={-1} border={0} className="main-container">
      <Helmet>
        <title>Tantekos - Cari Kos Menjadi Mudah &amp; Terpercaya</title>
      </Helmet>

      <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/room/:slug" component={Detail} />
            <Route path="/kos" component={Kos} />
            <Route path="/kontrakan" component={Kontrakan} />
            <Route path="/account" component={Account} />
            <Route path="/roomadd" component={Roomadd} />
            <Route path="/cart" component={Cart} />
            {/* <Route path="/product" component={Product} /> */}
            <Route path="/homes" component={Homes} />
            <Route component={Notfound} />
          </Switch>
          <Footer />
      </Router>
    </Box>)
  }
}