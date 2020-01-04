import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Moment from 'react-moment';

const comments = (props) => {
	return (
		<List>
			<ListItem alignItems="flex-start">
				<ListItemAvatar>
					<Avatar alt="Remy Sharp" src={props.avatar} />
				</ListItemAvatar>
				<ListItemText
					primary={props.commentName}
					secondary={
						<React.Fragment>
							<Typography
								component="span"
								variant="body2"
								className="display: inline"
								color="textPrimary"
							>
								{props.commentText}
							</Typography>
							— <Moment fromNow>{props.createdAt}</Moment>
						</React.Fragment>
					}
				/>
			</ListItem>
			<Divider variant="inset" />
		</List>
	)
}

export default comments;


// const CommentView = (props) => {
// 	const classes = useStyles();
// 	return (<div>
// 		<Paper component="form" className={classes.root}>
// 			{
// 				props.loginStatus ?

// 					<div>

// 						<InputBase
// 							className={classes.input}
// 							placeholder="Berikan ulasan tentang kos ini ..."
// 							name="comment_text"
// 							value={props.commentText}
// 							onChange={props.handleChange}
// 						/>
// 						<IconButton onClick={props.handlePost} className={classes.iconButton} aria-label="search">
// 							<SendIcon />
// 						</IconButton>
// 					</div>
// 					:
// 					<div>
// 						<Typography variant="h5" component="h3">
// 							Anda belum login.
// 	  </Typography>
// 						<Typography component="p" color="secondary">
// 							Silahkan login dengan akun facebook Anda untuk menambahkan ulasan.
// 	  </Typography>
// 					</div>
// 			}
// 		</Paper>
// 	</div>)
// }


/* {
	this.state.comments
		.sort(function (a, b) { return b.createdAt - a.createdAt })
		.map(comment =>
			<div key={comment.id}>
				<Comments
				commentName={comment.name}
				avatar={comment.avatar}
					commentText={comment.commentText}
					createdAt={comment.createdAt} />
					</div>
		)
	} */
		// handleChange = (event) => {
		// 	this.setState({
		// 		// [event.target.name]: event.target.value
		// 		comment_text: event.target.value
		// 	})
		// }

		// handlePost = () => {
		// 	this.setState({ comment_text: "", loadingComment: true })
		// 	const { handle } = this.props.match.params
		// 	let comment =
		// 	{
		// 		name: this.state.name,
		// 		commentText: this.state.comment_text,
		// 		createdAt: Date.now()
		// 	};
		// 	fetch(`https://5de747e7b1ad690014a4e0d2.mockapi.io/rooms/${handle}/comments`,
		// 		{
		// 			method: 'POST',
		// 			headers: { 'Content-Type': 'application/json' },
		// 			body: JSON.stringify(comment)
		// 		}
		// 	).then(result => {
		// 		result.json().then(() => {
		// 			this.componentDidMount()
		// 			this.setState({ comment_text: "", loadingComment: false })
		// 		})
		// 	})
		// }