import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { Typography, Breadcrumbs, Link, Grid, Divider } from '@material-ui/core';
import Comments from './comments';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SendIcon from '@material-ui/icons/Send';
import LinearProgress from '@material-ui/core/LinearProgress';
import Skeleton from '@material-ui/lab/Skeleton';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	root: {
		padding: '2px 4px',
		display: 'flex',
		alignItems: 'center',
		maxWidth: 900,
	},
	media: {
		height: 240,
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
	},
	divider: {
		marginBottom: 20,
	}
}));

const CommentView = (props) => {
	const classes = useStyles();
	return (<div>
		<Paper component="form" className={classes.root}>
			<InputBase
				className={classes.input}
				placeholder="Review kos ini ..."
				name="comment_text"
				value={props.commentText}
				onChange={props.handleChange}
			/>
			<IconButton onClick={props.handlePost} className={classes.iconButton} aria-label="search">
				<SendIcon />
			</IconButton>
		</Paper>
	</div>)
}

const DetailView = (props) => {
	const classes = useStyles();
	return (
		<div>
			<Card className={classes.card}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image={props.avatar}
						title={props.room_title}
					/>
					<CardContent>

						<Typography variant="body1">Kos
							{
								props.room_gender === 1 ? " Putra" :
									props.room_gender === 2 ? " Putri" : " Campur"
							}
						</Typography>

						<Typography variant="h5">{props.room_title}</Typography>

						<Divider className={classes.divider} />
						<Typography variant="body1">Deskripsi Kost</Typography>
						<Typography variant="caption">{props.description}</Typography>

						<Divider className={classes.divider} />
						<Typography variant="body1">Fasilitas Kamar</Typography>
						<Typography variant="caption">
							Kasur, Lemari pakaian, TV, AC, Kursi belajar, Wastafel, Sekamar berdua
						</Typography>

						<Divider className={classes.divider} />
						<Typography variant="body1">Fasilitas Bersama</Typography>
						<Typography variant="caption">
							Dapur, Balcon, Akses kunci 24 jam
						</Typography>

						<Divider className={classes.divider} />
						<Typography variant="body1">Lokasi kos</Typography>

						<Divider className={classes.divider} />
						<Typography variant="body1">Pemilik kost</Typography>
						<Typography variant="caption">
							{props.owner_name}
						</Typography>

					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						Bagikan
        			</Button>
					<Button size="small" color="primary">
						Simpan
        			</Button>
				</CardActions>
			</Card>
		</div>
	)
}

class Detail extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			loadingComment: false,
			articles: [],
			comments: [],
			name: '',
			comment_text: '',
			date_text: ''
		}
	}

	componentDidMount() {
		let user = JSON.parse(localStorage.getItem("user"))
		this.setState({
			name: user[0].name
		})
		const { handle } = this.props.match.params
		fetch(`https://5de747e7b1ad690014a4e0d2.mockapi.io/rooms/${handle}`)
			.then(response => response.json())
			.then(data => {
				this.setState({ articles: data })
				this.setState({ comments: this.state.articles.comments })
				this.setState({ loading: false })
			}
			)
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handlePost = () => {
		this.setState({ comment_text: "", loadingComment: true })
		const { handle } = this.props.match.params
		let comment =
		{
			name: this.state.name,
			commentText: this.state.comment_text,
			createdAt: Date.now()
		};
		fetch(`https://5de747e7b1ad690014a4e0d2.mockapi.io/rooms/${handle}/comments`,
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(comment)
			}
		).then(result => {
			result.json().then(() => {
				this.componentDidMount()
				this.setState({ comment_text: "", loadingComment: false })
			})
		})
	}

	render() {
		const Linktohome = React.forwardRef((props, ref) => (
			<RouterLink innerRef={ref} to="/" {...props} />
		));

		return (<div>

			{
				this.state.loading ?
					<Skeleton height={30} width="20%" />
					:
					(
						<div>
							<Breadcrumbs aria-label="breadcrumb">
								<Link color="inherit" component={Linktohome}>Home</Link>
								<Typography color="textPrimary">{this.state.articles.room_title}</Typography>
							</Breadcrumbs>
						</div>
					)
			}

			<br />

			<Grid container spacing={1}>
				<Grid item md={8}>

					{
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
								<DetailView
									avatar={this.state.articles.avatar}
									room_title={this.state.articles.room_title}
									description={this.state.articles.description}
									room_gender={this.state.articles.room_gender}
									owner_name={this.state.articles.owner_name}
									owner_phone={this.state.articles.owner_phone} />
							)
					}
				</Grid>

				<Grid item md={4}>
					{
						this.state.loadingComment ?
							<LinearProgress /> : ''
					}
					{
						this.state.loading ?
							<div>
								<Skeleton variant="rect" width="100%" height={50} />
								<React.Fragment>
									<Skeleton variant="circle" width={40} height={40} />
									<Skeleton height={30} style={{ marginBottom: 2 }} />
									<Skeleton height={30} width="80%" />
								</React.Fragment>
							</div>
							:
							(
								<div>
									<CommentView
										commentText={this.state.comment_text}
										handleChange={this.handleChange}
										handlePost={this.handlePost} />
									{
										this.state.comments.map(comment =>
											<div key={comment.id}>
												<Comments
													commentName={comment.name}
													avatar={comment.avatar}
													commentText={comment.commentText}
													createdAt={comment.createdAt} />
											</div>
										).sort(function (a, b) { return b - a })
									}
								</div>
							)
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

export default connect(mapStateToProps)(Detail);