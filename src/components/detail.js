import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import Peta from './peta';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Fbcomment from './fbcomment';
import Navigate from './navigate';
import Fbshare from './fbshare';
import OutdoorGrillIcon from '@material-ui/icons/OutdoorGrill';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MoneyIcon from '@material-ui/icons/Money';
import { MdPictureInPicture, MdDirectionsCar, MdToys, MdMotorcycle, MdWifi, MdAcUnit, MdKitchen, MdHotel } from 'react-icons/md';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Breadcrumbs, Link, Grid, Divider } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import Skeleton from '@material-ui/lab/Skeleton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Image from 'material-ui-image'
import { Helmet } from 'react-helmet';

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

	return (

		<>
			<GridList cellHeight={200} cols={4}>
				{props.photo_arr.map(tile => (
					<GridListTile key={tile.img} cols={tile.cols || 1}>
						<Image src={tile.img} alt={tile.title} />
					</GridListTile>
				))}
			</GridList>

			<Typography variant="h5">{props.room_title}</Typography>
			<Typography gutterBottom variant="body1">Kos
						{props.room_gender === 1 ? " Putra" : props.room_gender === 2 ? " Putri" : " Campur"} &bull; {props.location}
			</Typography>


			<Divider className={classes.divider} />
			<ListItem>
				<ListItemIcon>
					<MoneyIcon size="2em" />
				</ListItemIcon>
				<ListItemText>
					<CurrencyFormat value={props.price_month} displayType={'text'} thousandSeparator={true} prefix={'Rp '} /> / Bulan
						</ListItemText>
			</ListItem>

			<Divider className={classes.divider} />
			<ListItem>
				<ListItemIcon>
					<WhatsAppIcon size="2em" />
				</ListItemIcon>
				<ListItemText primary={props.owner_phone} />
			</ListItem>


			<Divider className={classes.divider} />
			<Typography variant="body1">Deskripsi</Typography>
			<Typography gutterBottom variant="caption">{props.description}</Typography>

			<Divider className={classes.divider} />

			<Grid container spacing={1}>
				<Grid item xs={12} sm={6}>
					<Typography variant="body1">Fasilitas Kamar</Typography>
					<Typography variant="caption">
						<List component="nav">
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
					</Typography>
				</Grid>

				<Grid item>
					<Typography variant="body1">Fasilitas Umum</Typography>
					<Typography variant="caption">
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
					</Typography>
				</Grid>
			</Grid>



			<Divider className={classes.divider} />
			<Typography variant="body1">Lokasi</Typography>
			<Peta latLng={props.latLng} room_title={props.room_title} />
			<br />
			<Fbshare
				id={props.id}
				image_url={props.image_url}
				room_title={props.room_title}
				description={props.description} />
		</>
	)
}

class Detail extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			room: [],
			facilities: [],
			date_text: '',
			showAlert: false
		}
	}

	async componentDidMount() {
		const user = JSON.parse(localStorage.getItem("user"));
		if (user) { this.setState({ name: user.name }) }
		const { handle } = this.props.match.params
		await fetch(`https://5de747e7b1ad690014a4e0d2.mockapi.io/rooms/${handle}`)
			.then(response => response.json())
			.then(data => {
				this.setState({ room: data })
				this.setState({ facilities: this.state.room.facilities, loading: false })
			})
	}

	render() {
		const Linktohome = React.forwardRef((props, ref) => (
			<RouterLink innerRef={ref} to="/" {...props} />
		));

		return (<>

			<Helmet>
				<meta property="og:url" content={"https://www.tantekos.com/room/" + this.state.room.id} />
				<meta property="og:type" content="article" />
				<meta property="og:title" content={this.state.room.room_title} />
				<meta property="og:description" content={this.state.room.room_title + ' ' + this.state.room.location + ' - ' + this.state.room.description} />
				<meta property="og:image" content={this.state.room.image_url} />
			</Helmet>

			{
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

					{this.state.loading ?
						<div>
							<Skeleton variant="rect" width="100%" height={200} style={{ marginBottom: 2 }} />
							<React.Fragment>
								<Skeleton height={30} style={{ marginBottom: 2 }} />
								<Skeleton height={30} width="80%" />
							</React.Fragment>
						</div>
						:
						(
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
								photo_arr={this.state.room.photo_arr}
								facilities_arr={this.state.room.facilities_arr} />
						)
					}
				</Grid>
				<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
					{this.state.loadingComment ? <LinearProgress /> : ''}
					{this.state.loading ?
						<div>
							<Skeleton variant="rect" width="100%" height={50} />
							<React.Fragment>
								<Skeleton height={30} style={{ marginBottom: 2 }} />
								<Skeleton height={30} width="80%" />
							</React.Fragment>
						</div>
						: <Fbcomment id={this.state.room.id} />
					}
					<Navigate />

				</Grid>

			</Grid>
		</>)
	}
}

export default Detail;