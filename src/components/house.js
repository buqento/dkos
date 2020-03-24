import React, { Component } from 'react';
import Axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: 150
    },
    media: {
        height: 140
    }
});

const MenuItem = ({ slug, price_month, room_title, image_url, room_gender, location, createdAt }) => {
    const classes = useStyles();
    const Linkdetail = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);
    return (
        <Box p={1}>
            <Card className={classes.root}>
                <CardActionArea component={Linkdetail} to={"/room/" + slug}>
                    <CardMedia
                        className={classes.media}
                        component="img"
                        alt={room_title}
                        image={image_url}
                        title={room_title}
                    />
                    <CardContent>
                        <Typography variant="body1">
                            { price_month }
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
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
        const Menu = (rooms) => rooms.map(el => {
            const { slug, room_title, image_url, room_gender, location, createdAt, price_month } = el;
            return (
                <MenuItem
                    price_month={price_month}
                    room_title={room_title}
                    slug={slug}
                    image_url={image_url}
                    room_gender={room_gender}
                    location={location}
                    createdAt={createdAt}
                    key={room_title}
                />
            );
        });

        const menu = Menu(rooms);
        return <ScrollMenu data={menu} />
    }
}

export default House;