import React from "react";
import useStyles from "./styles";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import { useDispatch } from "react-redux";

import { deletePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const boxSX = {
    "&:hover": {
      border: "1px solid #332f2f",
      color: '#332f2f',
      backgroundColor: '#332f2f'
    },
  };

  const cardSX = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    "&:hover": {
      boxShadow: 9,
    },
  };

  return (
    <Card sx={cardSX}>
      <CardMedia className={classes.media} image={post.selectedFile || 'https://via.placeholder.com/600x400/ffd900/f50808.png?text=Your+Image+:)'} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize='medium'/></Button>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button sx={boxSX} style={{color: '#e12929'}} className="delete-button" size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteOutlineIcon style={{color: '#e12929'}} fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Post;