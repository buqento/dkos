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
import Roomaddpeta from './roomaddpeta';
import Slugify from 'slugify';

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
                        placeholder="Foto utama"
                        margin="dense"
                        onChange={props.handleChange}
                        required
                        fullWidth
                    />

                    <TextField
                        variant="outlined"
                        name="photo_one"
                        placeholder="Detail foto"
                        margin="dense"
                        onChange={props.handleChange}
                        required
                        fullWidth
                    />

                    <Select
                        value={props.photo_one_ratio}
                        onChange={props.handleChange}
                        name="photo_one_ratio"
                        variant="outlined"
                        margin="dense"
                        required
                        fullWidth
                    >
                        {
                            [{ id: "34", label: "3 x 4" }, { id: "43", label: "4 x 3" }, { id: "11", label: "1 x 1" }]
                                .map(option => (
                                    <MenuItem key={option.id} value={option.id}>
                                        {option.label}
                                    </MenuItem>
                                ))
                        }
                    </Select>

                    <TextField
                        variant="outlined"
                        name="photo_two"
                        placeholder="Detail foto"
                        margin="dense"
                        onChange={props.handleChange}
                        required
                        fullWidth
                    />

                    <Select
                        value={props.photo_two_ratio}
                        onChange={props.handleChange}
                        name="photo_two_ratio"
                        variant="outlined"
                        margin="dense"
                        required
                        fullWidth
                    >
                        {
                            [{ id: "34", label: "3 x 4" }, { id: "43", label: "4 x 3" }, { id: "11", label: "1 x 1" }]
                                .map(option => (
                                    <MenuItem key={option.id} value={option.id}>
                                        {option.label}
                                    </MenuItem>
                                ))
                        }
                    </Select>

                    <TextField
                        variant="outlined"
                        name="photo_three"
                        placeholder="Detail foto"
                        margin="dense"
                        onChange={props.handleChange}
                        required
                        fullWidth
                    />
                    <Select
                        value={props.photo_three_ratio}
                        onChange={props.handleChange}
                        name="photo_three_ratio"
                        variant="outlined"
                        margin="dense"
                        required
                        fullWidth
                    >
                        {
                            [{ id: "34", label: "3 x 4" }, { id: "43", label: "4 x 3" }, { id: "11", label: "1 x 1" }]
                                .map(option => (
                                    <MenuItem key={option.id} value={option.id}>
                                        {option.label}
                                    </MenuItem>
                                ))
                        }
                    </Select>

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
                        format="62###########"
                        mask="_"
                        margin="dense"
                        onChange={props.handleChange}
                        required
                        fullWidth
                        thousandSeparator={true} />

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
                </Grid>

                <Grid item md={6}>

                    <Select
                        value={props.type}
                        onChange={props.handleChange}
                        name="type"
                        variant="outlined"
                        margin="dense"
                        required
                        fullWidth
                    >
                        {
                            [{ id: 1, val: "type1", label: "Kos" }, { id: 2, val: "type2", label: "Kontrakan" }]
                                .map(option => (
                                    <MenuItem key={option.id} value={option.val}>
                                        {option.label}
                                    </MenuItem>
                                ))
                        }
                    </Select>

                    <br />
                    <br />
                    <Select
                        value={props.room_gender}
                        onChange={props.handleChange}
                        name="room_gender"
                        variant="outlined"
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
                    <br />
                    <br />
                    <Select
                        value={props.location}
                        onChange={props.handleChange}
                        name="location"
                        variant="outlined"
                        margin="dense"
                        required
                        fullWidth
                    >
                        {props.locations.sort(function (a, b) {
                            var nameA = a.name.toUpperCase();
                            var nameB = b.name.toUpperCase();
                            if (nameA < nameB) {
                                return -1;
                            }
                            if (nameA > nameB) {
                                return 1;
                            }
                            return 0;
                        }).map(option => (
                            <MenuItem key={option.id} value={option.name}>
                                {option.name}
                            </MenuItem>
                        ))}
                    </Select>
                    
                    <br />
                    <br />
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

                    <Roomaddpeta />

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
            photo_arr: "",
            facilities_arr: "",
            photo_one: "",
            photo_two: "",
            photo_three: "",            
            photo_one_ratio: "34",
            photo_two_ratio: "34",
            photo_three_ratio: "34",
            price_month: "",
            owner_phone: "",
            owner_name: "",
            description: "",
            location: "",
            latLng: [],
            room_gender: 1,
            createdAt: "",
            slug: "",
            type: "type1",
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
        const { room_title, image_url, photo_one, photo_two, photo_three, 
            photo_one_ratio, photo_two_ratio, photo_three_ratio, price_month,
            owner_phone, description, room_gender, location, lemari, kasur, meja, wifi,
            kipas, ac, parkirMotor, parkirMobil, type
        } = this.state

        let p1w = photo_one_ratio.charAt(0);
        let p1h = photo_one_ratio.charAt(1);
        let p2w = photo_two_ratio.charAt(0);
        let p2h = photo_two_ratio.charAt(1);
        let p3w = photo_three_ratio.charAt(0);
        let p3h = photo_three_ratio.charAt(1);

        Axios.post(`https://5de747e7b1ad690014a4e0d2.mockapi.io/rooms`,
            {
                avatar: "https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar-300x300.jpg",
                room_title: room_title,
                image_url: image_url,
                photos: [
                    { src: photo_one, width: p1w, height: p1h },
                    { src: photo_two, width: p2w, height: p2h },
                    { src: photo_three, width: p3w, height: p3h }
                ],
                facilities_arr: [{
                    lemari: lemari,
                    kasur: kasur,
                    meja: meja,
                    wifi: wifi,
                    kipas: kipas,
                    ac: ac,
                    parkirMotor: parkirMotor,
                    parkirMobil: parkirMobil
                }],
                price_month: price_month,
                owner_phone: owner_phone,
                owner_name: "Tantekos",
                description: description,
                location: location,
                views: 1,
                slug: Slugify(room_title.toLowerCase()),
                latLng: { lat: this.props.lat, lng: this.props.lng },
                room_gender: room_gender,
                createdAt: Date.now(),
                type: type
            },
            { headers: { 'Content-Type': 'application/json' } },
            { withCredentials: true }
        ).then((response) => {
            this.setState({ loading: false })
            console.log(response);
            alert('Yoshhhhhhhhhhhhhh!');
        }).catch(error => {
            alert(error)
            console.log(error);
        })
        event.preventDefault()
    }

    async componentDidMount() {
        await Axios.get(`https://5de747e7b1ad690014a4e0d2.mockapi.io/location`)
            .then(response => {
                this.setState({ locations: response.data })
                this.setState({ location: this.state.locations[0].name })
            }).catch(error => {
                console.warn(error)
            })
    }

    render() {
        return (<div>
            <Formview
                photo_one_ratio={this.state.photo_one_ratio}
                photo_two_ratio={this.state.photo_two_ratio}
                photo_three_ratio={this.state.photo_three_ratio}
                type={this.state.type}
                room_gender={this.state.room_gender}
                locations={this.state.locations}
                location={this.state.location}
                latLng={this.props.latLng}
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
    return {
        lat: state.lat,
        lng: state.lng
    }
}

export default connect(mapStateToProps)(Roomadd);