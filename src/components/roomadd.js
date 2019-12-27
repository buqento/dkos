import React from 'react';
import { connect } from 'react-redux';
import CurrencyFormat from 'react-currency-format';
import Axios from 'axios';
import { TextField, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';

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

        <Typography variant="h5">Data kos</Typography>

        {props.loading && <LinearProgress />}

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
                        name="image_url"
                        placeholder="URL Foto"
                        margin="dense"
                        onChange={props.handleChange}
                        required
                        fullWidth
                    />
                    <CurrencyFormat 
                        customInput={TextField}
                        variant="outlined"
                        name="price_month"
                        placeholder="Harga sewa"
                        margin="dense"
                        onChange={props.handleChange}
                        required
                        fullWidth
                        thousandSeparator={true} 
                        prefix={'Rp '} />

                    <CurrencyFormat 
                        customInput={TextField}
                        variant="outlined"
                        name="owner_phone"
                        placeholder="+62 852 xxxx xxxx"
                        format="+62 ### #### ####" 
                        mask="_"
                        margin="dense"
                        onChange={props.handleChange}
                        required
                        fullWidth
                        thousandSeparator={true} 
                        prefix={'Rp '} />
                    
                    
                    <TextField
                        variant="outlined"
                        name="description"
                        placeholder="Deskripsi kos"
                        value={props.description}
                        margin="dense"
                        onChange={props.handleChange}
                        required
                        fullWidth
                        multiline
                    />

                    <Select
                        value={props.room_gender}
                        onChange={props.handleChange}
                        name="room_gender"
                        margin="dense"
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
                    </Select>

                    <Select
                        value={props.location}
                        onChange={props.handleChange}
                        name="location"
                        margin="dense"
                        required
                        fullWidth
                        >
                            {props.locations.map(option => (
                                <MenuItem key={option.id} value={option.name}>
                                    {option.name}
                                </MenuItem>
                            ))}
                    </Select>

                    {/* <TextField
                        variant="outlined"
                        label="Lokasi"
                        name="location"
                        margin="dense"
                        value={props.locationSelect}
                        onChange={props.handleChange}
                        select
                        required
                        fullWidth
                    >
                    </TextField> */}
                    <TextField
                        variant="outlined"
                        name="lat"
                        placeholder="Latitude"
                        value={props.lat}
                        margin="dense"
                        onChange={props.handleChange}
                        required
                        fullWidth
                    />
                    <TextField
                        variant="outlined"
                        name="lng"
                        placeholder="Longitude"
                        value={props.lng}
                        margin="dense"
                        onChange={props.handleChange}
                        required
                        fullWidth
                    />
                </Grid>

                <Grid item md={6}>

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={props.lemari}
                                onChange={props.handleChangeFacility('lemari')}
                                value={props.lemari}
                                name="lemari"
                                color="primary"
                            />
                        }
                        label="Lemari Pakaian"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={props.kasur}
                                onChange={props.handleChangeFacility('kasur')}
                                value={props.kasur}
                                name="kasur"
                                color="primary"
                            />
                        }
                        label="Kasur"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={props.meja}
                                onChange={props.handleChangeFacility('meja')}
                                value={props.meja}
                                name="meja"
                                color="primary"
                            />
                        }
                        label="Meja Belajar"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={props.wifi}
                                onChange={props.handleChangeFacility('wifi')}
                                value={props.wifi}
                                name="wifi"
                                color="primary"
                            />
                        }
                        label="Wifi"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={props.kipas}
                                onChange={props.handleChangeFacility('kipas')}
                                value={props.kipas}
                                name="kipas"
                                color="primary"
                            />
                        }
                        label="Kipas Angin"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={props.ac}
                                onChange={props.handleChangeFacility('ac')}
                                value={props.ac}
                                name="ac"
                                color="primary"
                            />
                        }
                        label="AC"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={props.parkirMotor}
                                onChange={props.handleChangeFacility('parkirMotor')}
                                value={props.parkirMotor}
                                name="parkirMotor"
                                color="primary"
                            />
                        }
                        label="Parkiran Motor"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={props.parkirMobil}
                                onChange={props.handleChangeFacility('parkirMobil')}
                                value={props.parkirMobil}
                                name="parkirMobil"
                                color="primary"
                            />
                        }
                        label="Parkiran Mobil"
                    />
                </Grid>
            </Grid>
            <Button variant="outlined" color="primary" type="submit">Publish</Button>
        </form>

    </div>)
}

class Roomadd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            room: [],
            locations: [],
            lastData: "",
            room_title: "",
            image_url: "",
            price_month: "",
            owner_phone: "",
            owner_name: "",
            description: "",
            location: "",
            lat: "-6.164705",
            lng: "106.781984",
            room_gender: 1,
            createdAt: "",
            lemari: true,
            kasur: true,
            meja: false,
            wifi: false,
            kipas: false,
            ac: false,
            parkirMotor: true,
            parkirMobil: false,
            loading: false
        }

        this.handlePost = this.handlePost.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleChangeFacility = name => event => {
        this.setState({ ...this.state, [name]: event.target.checked });
    };

    handlePost(event) {
        this.setState({ loading: true })
        let user = JSON.parse(localStorage.getItem("user"))
        const {
            room_title,
            image_url,
            price_month,
            owner_phone,
            description,
            room_gender,
            location,
            lat,
            lng,
            lemari,
            kasur,
            meja,
            wifi,
            kipas,
            ac,
            parkirMotor,
            parkirMobil
        } = this.state

        Axios.post(`https://5de747e7b1ad690014a4e0d2.mockapi.io/rooms`,
            {
                avatar:user.profile.picture.data.url,
                room_title: room_title,
                image_url: image_url,
                price_month: price_month,
                owner_phone: owner_phone,
                owner_name: user.profile.first_name,
                description: description,
                location: location,
                lat: lat,
                lng: lng,
                room_gender: room_gender,
                createdAt: Date.now()
            },
            { headers: { 'Content-Type': 'application/json' } },
            { withCredentials: true }
        ).then((response) => {
            this.setState({ loading: false })
            console.log(response)
            // response.status === 201 && this.props.history.push("/")
        }).catch(error => {
            console.warn(error)
        })

        Axios.post(`https://5de747e7b1ad690014a4e0d2.mockapi.io/rooms/${this.state.lastData}/facilities`,
            {               
                lemari: lemari,
                kasur: kasur,
                meja: meja,
                wifi: wifi,
                kipas: kipas,
                ac: ac,
                parkirMotor: parkirMotor,
                parkirMobil: parkirMobil
            },
            { headers: { 'Content-Type': 'application/json' } },
            { withCredentials: true }
        ).then((response) => {
            this.setState({ loading: false })
            console.log(response)
            response.status === 201 && this.props.history.push("/")
        }).catch(error => {
            console.warn(error)
        })
        event.preventDefault()
    }

    async componentDidMount() {
        // Get locations
        await Axios.get(`https://5de747e7b1ad690014a4e0d2.mockapi.io/location`)
            .then(response => {
                this.setState({ locations: response.data })
                this.setState({ location: this.state.locations[0].name})
            }).catch(error => {
                console.warn(error)
            })

        // Get Last ID Room
        await Axios.get(`https://5de747e7b1ad690014a4e0d2.mockapi.io/rooms`)
            .then(response => {
                if(response.data.length === 0){
                    this.setState({ lastData: 1 })
                }else{
                    let last = response.data[response.data.length - 1]
                    let lastData = parseInt(last.id) + 1
                    this.setState({ lastData: lastData })    
                }
            })
            .catch(e => console.warn(e))
    }

    render() {
        return (<div>
            <Formview
                room_gender={this.state.room_gender}
                locations={this.state.locations}
                location={this.state.location}
                lemari={this.state.lemari}
                kasur={this.state.kasur}
                meja={this.state.meja}
                wifi={this.state.wifi}
                kipas={this.state.kipas}
                ac={this.state.ac}
                parkirMotor={this.state.parkirMotor}
                parkirMobil={this.state.parkirMobil}
                loading={this.state.loading}
                handlePost={this.handlePost}
                handleChange={this.handleChange}
                handleChangeFacility={this.handleChangeFacility}
            />
        </div>)
    }

}

const mapStateToProps = (state) => {
    return{
        loginStatus: state.loginStatus
    }
}

export default connect(mapStateToProps)(Roomadd);