import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Rooms from './rooms';
import Notfound from '../notfound';
import Detail from './detail';
import Roomadd from './roomadd';
import Nav from './nav';
import Container from '@material-ui/core/Container';

class Home extends React.Component {
    render() {
        return (<div>
            <Router>
                <Container fixed>
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Rooms} />
                        <Route path="/room/:handle" component={Detail} />
                        <Route path="/roomadd" component={Roomadd} />
                        <Route component={Notfound} />
                    </Switch>
                </Container>
            </Router>
        </div>)
    }
}

// const mapStateToProps = (state) => {
//     return {
//         loginStatus: state.loginStatus
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         handleAuthLogin: () => dispatch({ type: "AUTH_LOGIN" }),
//     }
// }

export default Home;