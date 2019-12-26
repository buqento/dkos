import React from 'react';

class Lifecycle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            num:1
        }
        console.log("constructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps")
        return true
    }
    
    componentDidMount(){
        console.log("componentDidMount")
    }
    
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate")
        console.log(nextState)
        if(nextState.num >= 10){
            return false
        }
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("componentDidUpdate")
    }

    componentWillUnmount(){
        console.log("componentWillUnmount")
        alert("Thanks for using the component!")
    }
    
    countNum = () => {
        this.setState({num: this.state.num + 1})
    }

    render(){
        console.log("render")
        return(<div>
            <button onClick={this.countNum}>Like {this.state.num}</button>
        </div>)
    }
}

export default Lifecycle;