import React from 'react';
import {connect} from 'react-redux';

class Crd extends React.Component {
    render(){
        return(<div>
            {this.props.messages}
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}
export default connect(mapStateToProps)(Crd);