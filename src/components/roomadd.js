import React from 'react';
import {connect} from 'react-redux';
import Axios from 'axios';
import { TextField, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: 20
    },
    grid: {
        marginBottom: theme.spacing(1)
    }
}));

const Formview = (props) => {

    const classes = useStyles();

    return (<div>

        <Typography variant="h4">Data kos</Typography>

        <form onSubmit={props.handlePost} className={classes.root}>

            <Grid container spacing={2} className={classes.grid}>
                <Grid item md={6}>
                    <TextField
                        variant="outlined"
                        name="room_title"
                        placeholder="Nama kos"
                        margin="dense"
                        onChange={props.handleChange}
                        required
                        fullWidth
                    />
                    <TextField
                        variant="outlined"
                        name="price_title_time"
                        placeholder="Judul harga/bulan"
                        margin="dense"
                        onChange={props.handleChange}
                        required
                        fullWidth
                    />
                    <TextField
                        variant="outlined"
                        name="owner_phone"
                        placeholder="Telepon"
                        margin="dense"
                        onChange={props.handleChange}
                        required
                        fullWidth
                    />

                </Grid>
                <Grid item md={6}>
                    <TextField
                        variant="outlined"
                        name="description"
                        placeholder="Deskripsi kos"
                        margin="dense"
                        onChange={props.handleChange}
                        required
                        fullWidth
                        multiline
                    />
                    <TextField
                        variant="outlined"
                        label="Jenis kos"
                        name="room_gender"
                        margin="dense"
                        onChange={props.handleChange}
                        select
                        required
                        fullWidth
                    >
                        {
                            [{ id: 1, label: "Putra" }, { id: 2, label: "Putri" }, { id: 3, label: "Campur" }]
                                .map(option => (
                                    <MenuItem key={option.id} value={option.id}>
                                        {option.label}
                                    </MenuItem>
                                ))
                        }
                    </TextField>

                    <TextField
                        variant="outlined"
                        label="Lokasi"
                        name="location"
                        margin="dense"
                        onChange={props.handleChange}
                        select
                        required
                        fullWidth
                    >
                        {props.locations.map(option => (
                            <MenuItem key={option.id} value={option.name}>
                                {option.name}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
            </Grid>
            <Button variant="outlined" color="primary" type="submit">Tambah Kos</Button>
        </form>

    </div>)
}

class Roomadd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            room: [],
            locations: [],
            room_title: "",
            price_title_time: "",
            owner_phone: "",
            owner_name: "",
            description: "",
            location: "",
            room_gender: "",
            createdAt: ""
        }

        this.handlePost = this.handlePost.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handlePost(event) {
        let user = JSON.parse(localStorage.getItem("user"))
        const {
            room_title,
            price_title_time,
            owner_phone,
            description,
            location,
            room_gender } = this.state
        Axios.post(`https://5de747e7b1ad690014a4e0d2.mockapi.io/rooms`,
            {
                room_title: room_title,
                price_title_time: price_title_time,
                owner_phone: owner_phone,
                owner_name: user[0].name,
                description: description,
                location: location,
                room_gender: room_gender,
                createdAt: Date.now()
            },
            { headers: { 'Content-Type': 'application/json' } },
            { withCredentials: true }
        ).then(response => {
            console.log(response)
            alert('Data tersimpan!');
        }).catch(error => {
            console.warn(error)
        })
        event.preventDefault()
    }

    componentDidMount() {
        //Get locations
        Axios.get(`https://5de747e7b1ad690014a4e0d2.mockapi.io/location`)
            // .then(response => response.json())
            .then(response => {
                this.setState({ locations: response.data })
            }).catch(error => {
                console.warn(error)
            })
    }

    render() {
        return (<div>
            <Formview
                locations={this.state.locations}
                handlePost={this.handlePost}
                handleChange={this.handleChange}
            />
        </div>)
    }

}

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}

export default connect(mapStateToProps)(Roomadd);