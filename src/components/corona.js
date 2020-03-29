import React from 'react';

export default class Covid19 extends React.Component {
    constructor(){
        super()
        this.state = {
            action: 'Code'
        }
        this.handleCovid19 = this.handleCovid19.bind(this)
    }

    handleCovid19(){
        let actions = ['Praise GOD Im Alive','Code','Eat','Sleep']
        let rand = Math.floor(actions.length * Math.random())
        rand !== 0 ? this.setState({ action: actions[rand]}) 
        : alert(actions[rand])
    }

    render(){
        const { action } = this.state
        return <button onClick={this.handleCovid19}>{action}</button>     
    }
} 