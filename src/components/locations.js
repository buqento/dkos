import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RoomIcon from '@material-ui/icons/Room';
import Divider from '@material-ui/core/Divider';

class Locations extends React.Component {

    constructor() {
        super();
        this.state = {
            locations: []
        }
    }

    componentDidMount() {
        Axios.get(`https://5de747e7b1ad690014a4e0d2.mockapi.io/location`)
            .then(response => {
                this.setState({ locations: response.data })
            }).catch(error => {
                console.warn(error)
            })
    }

    render() {
        return (<div>

            <List>
                {
                    this.state.locations.sort(function (a, b) {
                        var nameA = a.name.toUpperCase();
                        var nameB = b.name.toUpperCase();
                        if (nameA < nameB) {
                            return -1;
                        }
                        if (nameA > nameB) {
                            return 1;
                        }
                        return 0;
                    }).map(location =>
                        <div key={location.id} onClick={this.props.handleFilter.bind(this, location.name)}>
                            <ListItem button >
                                <ListItemIcon>
                                    <RoomIcon />
                                </ListItemIcon>
                                <ListItemText primary={location.name} />
                            </ListItem>
                            <Divider />
                        </div>
                    )
                }
            </List>

        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleFilter: (filter) => dispatch({ type: "FILTER_LOCATION", filter: filter })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Locations);