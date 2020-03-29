import React, { Component } from 'react';
import Axios from 'axios';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { Box } from '@material-ui/core';
import ModalComponent from './modal';

const MenuItem = ({ room }) => {
    let priceType = '';
    room.price_month === 'Rp 0' ? (priceType = 'Nego') : (priceType = room.price_month);
    return (
        <Box pr={1}>
            <ModalComponent
                width={130}
                room={room}
                priceType={priceType} />
        </Box>
    );
};

class House extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: []
        }
    }

    componentDidMount() {
        Axios.get(`https://5de747e7b1ad690014a4e0d2.mockapi.io/rooms?filter=type2&sortBy=createdAt&order=desc`)
            .then(response => {
                console.log(response)
                this.setState({ rooms: response.data })
            })
            .catch(err => console.warn(err))
    }

    render() {
        const { rooms } = this.state;
        const Menu = (rooms) => rooms.map(room => {
            return (
                <MenuItem room={room} />
            );
        });

        const menu = Menu(rooms);
        return <ScrollMenu data={menu} />
    }
}

export default House;