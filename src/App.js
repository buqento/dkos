import React from 'react';
// import Lifecycle from './lifecycle';
import Home from './components/home';

class App extends React.Component {

  state = {
    showLifecycle: true,
    btnText: "hide"
  }

  componentDidMount(){}

  showHiddenLifecycle = () => {
    this.setState({showLifecycle: !this.state.showLifecycle})
    this.state.showLifecycle ? this.setState({btnText:"show"}) : this.setState({btnText:"hide"})
  }

  render(){
    return(<div>
      <button onClick={this.showHiddenLifecycle}>{this.state.btnText}</button>
      {
        this.state.showLifecycle ? <Home /> : ''
      }
    </div>)
  }
}

export default App;
