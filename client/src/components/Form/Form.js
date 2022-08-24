import React, { useState, useEffect } from "react";

import { TextField, Button, Typography, Paper } from "@mui/material";
import Collapse from '@mui/material/Collapse';
import CardContent from '@mui/material/CardContent';

import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const [expanded, setExpanded] = useState(false);
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  const clearSX = {
    width: '45%',
    borderColor: "#097485",
    backgroundColor: '#097485',
    color: '#fcfcfc',
    m: 1,
    "&:hover": {
      border: "1px solid #332f2f",
      color: '#097485',
      backgroundColor: '#332f2f'
    },
  }

  const createSX = {
    width: '45%',
    borderColor: "#f5ba13",
    backgroundColor: '#f5ba13',
    color: '#fcfcfc',
    m: 1,
    "&:hover": {
        border: "1px solid #332f2f",
        color: '#f5ba13',
        backgroundColor: '#332f2f',
    },
  }

  const uploadFile = {
    borderColor: "#f5ba13",
    m: 1,
    backgroundColor: '#332f2f',
    color: '#faf7f7',
    width: '100%',
    "&:hover": {
        border: "1px solid #332f2f",
        color: '#f5ba13',
        backgroundColor: '#332f2f',
    },
  }

  const paperSX = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    position: 'relative',
    boxShadow: 'none',
    "&:hover": {
      // boxShadow: 9,
    },
  };
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    
    <Paper sx={paperSX}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.title}"` : ''}</Typography>
        <TextField name="title" variant="outlined" label="Title" fullWidth color="warning" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth color="warning" multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
       
        <Button
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={uploadFile}
        >
          Upload
        </Button>
        
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent sx={{width: '100vw'}}>
                <FileBase className={classes.fileBase} multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}/>
            </CardContent>
        </Collapse>
          <Button variant="contained" sx={createSX} type="submit" size="small" >Create</Button>
          <Button sx={clearSX} variant="contained" onClick={clear} size="small" >Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;