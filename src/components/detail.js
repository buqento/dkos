import React from 'react';
import Axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { Helmet } from 'react-helmet';

import Fbcomment from './fbcomment';
import Navigate from './navigate';
import Peta from './peta';
import Fbshare from './fbshare';

import OutdoorGrillIcon from '@material-ui/icons/OutdoorGrill';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MoneyIcon from '@material-ui/icons/Money';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { MdPictureInPicture, MdDirectionsCar, MdToys, MdMotorcycle, MdWifi, MdAcUnit, MdKitchen, MdHotel } from 'react-icons/md';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Breadcrumbs, Link, Grid, Divider } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Gallery from 'react-grid-gallery';

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(1, 1),
		display: 'flex',
		alignItems: 'center',
		maxWidth: 900,
	},
	media: {
		height: 240,
	},
	price: {
		color: "blue"
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	iconButton: {
		padding: 10,
	},
	card: {
		marginBottom: 20,
		boxShadow: "none"
	},
	divider: {
		marginBottom: 20,
	}
}));

const DetailView = (props) => {

	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const handleClickOpen = () => { setOpen(true) };
	const handleClose = () => { setOpen(false) };

	return (<div>

		{/*inisialisasi komponen dialog*/}
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title">Tantekos</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">
					Silahkan masuk untuk menyukai kos ini.
		  		</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color="primary" autoFocus>Ok</Button>
			</DialogActions>
		</Dialog>

		{/*tampilkan daftar gambar pada komponen */}
		<Gallery images={props.photo_arr} isOpen={false} />

		{/*		<GridList cellHeight={200} cols={4}>
			{props.photo_arr.map(tile => (
				<GridListTile key={tile.img} cols={tile.cols || 1}>
					<Image src={tile.img} alt={tile.title} />
				</GridListTile>
			))}
		</GridList>*/}

		{/*tampilkan detail data kos*/}
		<br />
		<Typography variant="h5">{props.room_title}</Typography>
		<Typography gutterBottom variant="body1">{props.room_gender === 1 ? " Putra" : props.room_gender === 2 ? " Putri" : " Campur"} &bull; {props.location} &bull; {props.views} Lihat
		</Typography>

		{/*tampilkan grup button*/}
		<ButtonGroup color="secondary" aria-label="outlined secondary button group">

			{/*state: isLogin=true, maka dapat menekan button favorite/unfavorite*/}
			{/*state: isLogin=false, maka tampilkan dialog*/}
			<Button
				color="secondary"
				onClick={props.isLogin ? props.handleFavorites : handleClickOpen}
				startIcon={props.isFavorite ?
					<FavoriteIcon style={{ color: "red" }} fontSize="large" /> :
					<FavoriteBorderIcon color="primary" fontSize="large" />}
			>
				{props.likes} Suka
			</Button>

			{/*tampilkan button bagikan*/}
			<Button>
				<Fbshare
					id={props.id}
					slug={props.slug}
					image_url={props.image_url}
					room_title={props.room_title}
					description={props.description} />
			</Button>

		</ButtonGroup>

		<br />
		<br />
		<Divider className={classes.divider} />

		{/*tampilkan harga sewa*/}
		<ListItem>
			<ListItemIcon>
				<MoneyIcon size="2em" />
			</ListItemIcon>
			<ListItemText>
				<CurrencyFormat value={props.price_month} displayType={'text'} thousandSeparator={true} prefix={'Rp '} /> / Bulan
			</ListItemText>
		</ListItem>

		<Divider className={classes.divider} />

		{/*tampilkan nomor telepon pemilik*/}
		<ListItem>
			<ListItemIcon>
				<WhatsAppIcon size="2em" />
			</ListItemIcon>
			<ListItemText primary={props.owner_phone} />
		</ListItem>

		<Divider className={classes.divider} />

		{/*tampilkan deskripsi*/}
		<Typography variant="body1"><strong>Deskripsi</strong></Typography>
		<Typography gutterBottom variant="body2">{props.description}</Typography>

		<Divider className={classes.divider} />

		{/*fasilitas yang tersedia. True (tampilkan), false (tidak ditampilkan)*/}
		<Grid container spacing={1}>
			<Grid item xs={12} sm={6}>
				<Typography variant="body1"><strong>Fasilitas Kamar</strong></Typography>
				<List>
					{props.facilities_arr[0].lemari &&
						<ListItem>
							<ListItemIcon>
								<MdKitchen size="2em" />
							</ListItemIcon>
							<ListItemText primary="Lemari Pakaian" />
						</ListItem>
					}
					{props.facilities_arr[0].kasur &&
						<ListItem>
							<ListItemIcon>
								<MdHotel size="2em" />
							</ListItemIcon>
							<ListItemText primary="Kasur" />
						</ListItem>
					}
					{props.facilities_arr[0].meja &&
						<ListItem>
							<ListItemIcon>
								<MdPictureInPicture size="2em" />
							</ListItemIcon>
							<ListItemText primary="Meja Belajar" />
						</ListItem>
					}
					{props.facilities_arr[0].wifi &&
						<ListItem>
							<ListItemIcon>
								<MdWifi size="2em" />
							</ListItemIcon>
							<ListItemText primary="Wifi Hotspot" />
						</ListItem>
					}
					{props.facilities_arr[0].kipas &&
						<ListItem>
							<ListItemIcon>
								<MdToys size="2em" />
							</ListItemIcon>
							<ListItemText primary="Kipas Angin" />
						</ListItem>
					}
					{props.facilities_arr[0].ac &&
						<ListItem>
							<ListItemIcon>
								<MdAcUnit size="2em" />
							</ListItemIcon>
							<ListItemText primary="Air Conditioner" />
						</ListItem>
					}
				</List>
			</Grid>
			<Grid item>
				<Typography variant="body1"><strong>Fasilitas Umum</strong></Typography>
				<List>
					{props.facilities_arr[0].parkirMotor &&
						<ListItem>
							<ListItemIcon>
								<OutdoorGrillIcon size="2em" />
							</ListItemIcon>
							<ListItemText primary="Dapur" />
						</ListItem>
					}
					{props.facilities_arr[0].parkirMotor &&
						<ListItem>
							<ListItemIcon>
								<MdMotorcycle size="2em" />
							</ListItemIcon>
							<ListItemText primary="Parkiran Sepeda Motor" />
						</ListItem>
					}
					{props.facilities_arr[0].parkirMobil &&
						<ListItem>
							<ListItemIcon>
								<MdDirectionsCar size="2em" />
							</ListItemIcon>
							<ListItemText primary="Parkiran Mobil" />
						</ListItem>
					}
				</List>
			</Grid>
		</Grid>

		<Divider className={classes.divider} />

		{/*tampilkan lokasi menggunakan komponen peta*/}
		<Typography variant="body1"><strong>Lokasi</strong></Typography>
		<Peta latLng={props.latLng} room_title={props.room_title} zoom={16} maxZoom={18} />
		<br />

	</div>)
}

class Detail extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			room: [],
			facilities: [],
			isFavorite: false,
			isLogin: false,
			date_text: '',
			showAlert: false,
			likes: 0
		}
	}

	handleViewCount = () => {
		Axios.put(`https://5de747e7b1ad690014a4e0d2.mockapi.io/rooms/${this.state.room.id}`,
			{ views: this.state.room.views + 1 })
			.then(response => {
				console.log(response)
			})
			.catch(err => {
				console.log(err)
			})
	}

	handleFavorites = () => {
		const user = JSON.parse(localStorage.getItem('user'))
		if (user) {

			// favorite = false, tambahkan data (nama) ke tabel favorite
			if (!this.state.isFavorite) {

				Axios.post(`https://5de747e7b1ad690014a4e0d2.mockapi.io/rooms/${this.state.room.id}/favorite`,
					{ user_name: user.profileObj.givenName },
					{ headers: { 'Content-Type': 'application/json' } },
					{ withCredentials: true }
				).then((response) => {
					this.setState({ loading: false })
					console.log(response)
				}).catch(error => {
					console.warn(error)
				})

				// ubah state: like+1, favorite = true
				this.setState((prevState, props) => {
					return {
						likes: prevState.likes + 1,
						isFavorite: true
					};
				});

			} else {

				// favorite = true, hapus data (nama) dari tabel favorite
				// temukan idFavorite dengan kriteria roomid dan nama
				Axios.get(`https://5de747e7b1ad690014a4e0d2.mockapi.io/rooms/${this.state.room.id}/favorite?search=${user.profileObj.givenName}`)
					.then((response) => {
						let idFavorite = response.data[0].id

						// hapus data dengan kriteria roomid dan idFavorite
						Axios.delete(`https://5de747e7b1ad690014a4e0d2.mockapi.io/rooms/${this.state.room.id}/favorite/${idFavorite}`)
							.then((response) => {
								console.log(response)
							}).catch(error => {
								console.warn(error)
							})

					}).catch(error => {
						console.warn(error)
					})

				// ubah state: like-1, favorite = false
				this.setState((prevState, props) => {
					return {
						likes: prevState.likes - 1,
						isFavorite: false
					};
				});

			}

		}
	}

	async componentDidMount() {
		const user = JSON.parse(localStorage.getItem("user"));
		const { slug } = this.props.match.params

		// temukan data dengan kriteria slug
		await Axios.get(`https://5de747e7b1ad690014a4e0d2.mockapi.io/rooms?filter=${slug}`)
			.then(response => {
				this.setState({ room: response.data[0] })
				this.setState({
					facilities: this.state.room.facilities,
					likes: this.state.room.favorites.length,
					loading: false
				})
				this.handleViewCount()
			})

		// item user ada pada localstorage
		if (user) {

			// ubah state: isLogin = true
			this.setState({ isLogin: true })

			// temukan nama pada tabel favorite
			// jika ada, maka favorite = true, sebaliknya favorite = false 
			let favoriteArr = this.state.room.favorites.filter(value => { return value.user_name === user.profileObj.givenName })
			favoriteArr.length >= 1 ? this.setState({ isFavorite: true }) : this.setState({ isFavorite: false })
		}

	}

	render() {

		const Linktohome = React.forwardRef((props, ref) => (
			<RouterLink innerRef={ref} to="/" {...props} />
		));

		return (<div>

			{/*mengubah meta data untuk SEO*/}
			<Helmet>
				<meta property="og:url" content={"https://www.tantekos.com/room/" + this.state.room.slug} />
				<meta property="og:type" content="article" />
				<meta property="og:title" content={this.state.room.room_title} />
				<meta property="og:description" content={this.state.room.room_title + ' ' + this.state.room.location + ' - ' + this.state.room.description} />
				<meta property="og:image" content={this.state.room.image_url} />
				{
					this.state.room.room_title && <title>{"Tantekos - " + this.state.room.room_title}</title>
				}
				<meta name="description" content={this.state.room.room_title + ' ' + this.state.room.location + ' - ' + this.state.room.description} />
			</Helmet>

			{
				// tampilkan skeleton jika state loading = true
				this.state.loading ?
					<Skeleton height={30} width="20%" />
					:
					(
						<div>
							<Breadcrumbs aria-label="breadcrumb">
								<Link color="inherit" component={Linktohome}>Home</Link>
								<Typography color="textPrimary">{this.state.room.room_title}</Typography>
							</Breadcrumbs>
						</div>
					)
			}

			<br />

			<Grid container spacing={1}>
				<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>

					{

						// tampilkan skeleton jika state loading = true
						this.state.loading ?
							<div>
								<Skeleton variant="rect" width="100%" height={200} style={{ marginBottom: 2 }} />
								<React.Fragment>
									<Skeleton height={30} style={{ marginBottom: 2 }} />
									<Skeleton height={30} width="80%" />
								</React.Fragment>
							</div>
							:
							(

								// tampilkan detail jika state loading = false
								<DetailView
									id={this.state.room.id}
									avatar={this.state.room.avatar}
									image_url={this.state.room.image_url}
									room_title={this.state.room.room_title}
									price_title_time={this.state.room.price_title_time}
									price_month={this.state.room.price_month}
									description={this.state.room.description}
									room_gender={this.state.room.room_gender}
									owner_name={this.state.room.owner_name}
									owner_phone={this.state.room.owner_phone}
									location={this.state.room.location}
									latLng={this.state.room.latLng}
									createdAt={this.state.room.createdAt}
									views={this.state.room.views}
									photo_arr={this.state.room.photo_arr}
									facilities_arr={this.state.room.facilities_arr}
									handleFavorites={this.handleFavorites}
									likes={this.state.likes}
									isFavorite={this.state.isFavorite}
									isLogin={this.state.isLogin}
								/>
							)
					}
				</Grid>
				<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>

					{/*tampilkan komponen komentar facebook*/}
					<Fbcomment slug={this.state.room.slug} />

					{/*tampilkan komponen navigate*/}
					<Navigate />
				</Grid>

			</Grid>
		</div>)
	}
}

export default Detail;