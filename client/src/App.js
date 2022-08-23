import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import HighlightIcon from '@mui/icons-material/Highlight';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Collapse from '@mui/material/Collapse';
import CardContent from '@mui/material/CardContent';

import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import useStyles from './styles';
import { useEffect, useState } from 'react';

const App = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const classes = useStyles();
  
    useEffect(() => {
      dispatch(getPosts());
    }, [currentId, dispatch]);

    const [expanded, setExpanded] = useState(false);

    const handlePageChangeGitHub = () => {
       window.open("https://github.com/Piotrk39/Keepr_APP", "_blank");
    }

    const handlePageChangeLinkedIn = () => {
        window.open("https://www.linkedin.com/in/piotrk39/", "_blank");
    }

    const handleEmail = () => {
        window.open('mailto:piotrk39@gmail.com?subject=Subject&body=Body%20goes%20here');
    }

    const actionButtonSX = {
        color: "#f5ba13",
        "&:hover": {
            color: '#332f2f',
        },
    }

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center"><HighlightIcon fontSize="large"/>Keeper</Typography>
          
        <button
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          className="about-button"
        >
          About
        </button>
        
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
            <p>
              My name is Piotr Krajewski I'am QA Engeenier and a Full Stack JavaScript Developer<br></br>
              <GitHubIcon className="icon" sx={actionButtonSX} onClick={handlePageChangeGitHub}></GitHubIcon> 
              <LinkedInIcon className="icon" sx={actionButtonSX} onClick={handlePageChangeLinkedIn}></LinkedInIcon> 
              <EmailIcon className="icon" sx={actionButtonSX} onClick={handleEmail}></EmailIcon>
            </p>
            </CardContent>
        </Collapse>
        
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    );
  };
  
  export default App;