import React from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { TextField, Grid } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ShareIcon from '@material-ui/icons/Share';
import ListItemText from '@material-ui/core/ListItemText';
import RoomIcon from '@material-ui/icons/Room';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import Navigate from '../components/navigate';
import { Link as RouterLink } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import clsx from 'clsx';
import Moment from 'react-moment';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(2)
    },
    more: {
        marginTop: theme.spacing(2),
    },
    comment: {
        marginLeft: theme.spacing(2),
    },
    expand: {
        marginLeft: 'auto'
    },
}));

const Roomview = (props) => {
    const classes = useStyles();
    const numberOfItems = props.limit;
    const Linkdetail = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);
    return (<div>

        <Grid container spacing={2} className={classes.root}>
            {
                props.rooms
                    .slice(0, numberOfItems)
                    .map((room) =>

                        <Grid item md={6} sm={12} xs={12} key={room.id}>
                            <Card key={room.id}>
                                <CardHeader
                                    avatar={
                                        <Avatar alt="dK" src={room.avatar} className={classes.bigAvatar} />
                                    }
                                    action={
                                        <IconButton aria-label="share">
                                            <ShareIcon fontSize="small" color="primary" />
                                        </IconButton>
                                    }
                                    title={room.owner_name}
                                    subheader={<Moment fromNow>{room.createdAt}</Moment>}
                                />

                                <CardActionArea component={Linkdetail} to={"/details/" + room.id}>
                                    <CardMedia
                                        className={useStyles.media}
                                        component="img"
                                        alt={room.room_title}
                                        height="140"
                                        image={room.avatar}
                                        title={room.room_title}
                                    />
                                    <CardContent>
                                        <Typography variant="body1">Kos
							                {
                                                room.room_gender === 1 ? " Putra" :
                                                    room.room_gender === 2 ? " Putri" : " Campur"
                                            }
                                        </Typography>
                                        <Typography gutterBottom variant="h5">
                                            {room.room_title}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>

                                <CardActions disableSpacing>
                                    <Typography variant="caption" color="primary" className={classes.comment}>
                                        {room.comments.length > 0 ? room.comments.length + ' Ulasan' : ''}
                                    </Typography>

                                    <IconButton
                                        className={clsx(classes.expand)}
                                        aria-label="show more"
                                    >
                                        <FavoriteIcon />
                                    </IconButton>
                                </CardActions>

                            </Card>

                        </Grid>

                    )

            }

            <Grid item>
                {
                    (props.limit > props.rooms.length) ? '' :
                        <Button onClick={props.handleShowMore} variant="outlined" className={classes.more}>
                            <AddIcon />
                        </Button>
                }
            </Grid>
        </Grid>

        <Divider />

    </div>)
}

const Locationview = (props) => {

    return (<div>
        <Typography variant="h5">Lokasi favorit</Typography>
        <Typography variant="subtitle1">Cari kos kosan di lokasi favorit yang kamu mau</Typography>

        <List>
            {
                props.locations.sort(function (a, b) {
                    var nameA = a.name.toUpperCase();
                    var nameB = b.name.toUpperCase();
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                }).map(a =>
                    <div key={a.id} onClick={props.handleFilt.bind(this, a.name)}>
                        <ListItem button >
                            <ListItemIcon>
                                <RoomIcon />
                            </ListItemIcon>
                            <ListItemText primary={a.name} />
                        </ListItem>
                        <Divider />
                    </div>
                )
            }
        </List>
    </div>)
}

class Rooms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            locations: [],
            filter: '',
            loading: true,
            loadLocations: true,
            limit: 4
        }
    }

    handleShowMore = () => {
        this.setState({ limit: this.state.limit + 4 })
    }

    handleFilt = (params) => {
        const filter = params;
        this.setState({ filter: filter, loading: true })
        fetch(`https://5de747e7b1ad690014a4e0d2.mockapi.io/rooms?search=${filter}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ rooms: data, loading: false })
            })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        const filter = this.state.filter;
        fetch(`https://5de747e7b1ad690014a4e0d2.mockapi.io/rooms?search=${filter}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ rooms: data })
            })
    }

    async componentDidMount() {

        //Get locations
        await Axios.get(`https://5de747e7b1ad690014a4e0d2.mockapi.io/location`)
            .then(response => {
                this.setState({ locations: response.data, loadLocations: false })
            }).catch(error => {
                console.warn(error)
            })

        //Get rooms
        await fetch(`https://5de747e7b1ad690014a4e0d2.mockapi.io/rooms?sortBy=createdAt&order=desc`)
            .then(response => response.json())
            .then(data => {
                this.setState({ rooms: data, loading: false })
                console.log(data)
            })
    }

    render() {

        return (<div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={9}>
                    <Typography variant="h5">Mau cari kos?</Typography>
                    <form>
                        <TextField
                            type="text"
                            id="filled-basic"
                            name="filter"
                            placeholder="Cari kos"
                            value={this.state.filter}
                            onChange={this.handleChange}
                        />

                    </form>
                    <br />
                    <br />
                    {
                        this.state.loading ?
                            <div>
                                <Grid container spacing={2}>
                                    <Grid item md={6} sm={12}>
                                        <Skeleton variant="rect" width="100%" height={200} />
                                        <React.Fragment>
                                            <Skeleton height={30} style={{ marginBottom: 2 }} />
                                            <Skeleton height={30} width="80%" />
                                        </React.Fragment>
                                    </Grid>
                                    <Grid item md={6} sm={12}>
                                        <Skeleton variant="rect" width="100%" height={200} />
                                        <React.Fragment>
                                            <Skeleton height={30} style={{ marginBottom: 2 }} />
                                            <Skeleton height={30} width="80%" />
                                        </React.Fragment>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2}>
                                    <Grid item md={6} sm={12}>
                                        <Skeleton variant="rect" width="100%" height={200} />
                                        <React.Fragment>
                                            <Skeleton height={30} style={{ marginBottom: 2 }} />
                                            <Skeleton height={30} width="80%" />
                                        </React.Fragment>
                                    </Grid>
                                    <Grid item md={6} sm={12}>
                                        <Skeleton variant="rect" width="100%" height={200} />
                                        <React.Fragment>
                                            <Skeleton height={30} style={{ marginBottom: 2 }} />
                                            <Skeleton height={30} width="80%" />
                                        </React.Fragment>
                                    </Grid>
                                </Grid>
                            </div>
                            : (
                                <div>
                                    <Roomview
                                        limit={this.state.limit}
                                        rooms={this.state.rooms}
                                        handleShowMore={this.handleShowMore}
                                    />

                                    <Navigate />
                                </div>
                            )
                    }


                </Grid>
                <Grid item sm={3} xs={12}>
                    {
                        this.state.loadLocations ?
                            <div>
                                <React.Fragment>
                                    <Skeleton height={30} style={{ marginBottom: 2 }} />
                                    <Skeleton height={30} style={{ marginBottom: 2 }} />
                                    <Skeleton height={30} style={{ marginBottom: 2 }} />
                                    <Skeleton height={30} style={{ marginBottom: 2 }} />
                                    <Skeleton height={30} style={{ marginBottom: 2 }} />
                                </React.Fragment>
                            </div>
                            :
                            <Locationview
                                locations={this.state.locations}
                                handleFilt={this.handleFilt} />
                    }

                </Grid>
            </Grid>



        </div>)
    }

}

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus: () => dispatch({ type: "ADD_MESSAGE" })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);