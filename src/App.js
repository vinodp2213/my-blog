import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';


import Home from './components/home'
import Posts from './components/posts'
import ListAuthor from './components/listAuthors'
import PostShow from './components/postshow'
import AuthorShow from './components/authorShow'
import RandomPost from './components/randomPost'
import UserRegister from './components/register'
import UserLogin from './components/login'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  logo :{
    height : 25,
    marginLeft: 15
  },
  text : {
    fontWeight: 'bold',
  }
};

const App = (props) => {
  const { classes } = props;
    return (
      <BrowserRouter>
        <div className={classes.root}>
          <AppBar position="relative">
            <Toolbar>
              <Typography variant="h6" color="inherit" className={classes.grow}>
              <img src={logo} className={classes.logo} alt="logo" />
                React blog
              </Typography> 
                <Button color="inherit" component={Link} to="/" className={classes.text}>
                  Home
                </Button>
                <Button color="inherit" component={Link} to="/posts" className={classes.text}>
                  Posts
                </Button>
                <Button color="inherit" component={Link} to="/author" className={classes.text}>
                  Authors
                </Button>
                <Button color="inherit" component={Link} to="/random" className={classes.text}>
                  Random post
                </Button>
                <Button color="inherit" component={Link} to="/register" className={classes.text}>Register</Button>
                <Button color="inherit" component={Link} to="/login" className={classes.text}>Login</Button>
            </Toolbar>
          </AppBar>
        </div>
                

        <Switch>
          <Route path="/" component = {Home} exact={true}/>
          <Route path='/posts' component= {Posts} exact={true}></Route>
          <Route path='/author' component= {ListAuthor} exact={true}></Route>
          <Route path='/posts/:id' component ={PostShow}></Route>
          <Route path='/author/:id' component= {AuthorShow} exact={true}></Route>
          <Route path='/random' component= {RandomPost} exact={true}></Route>
          <Route path='/register' component= {UserRegister} exact={true}></Route>
          <Route path='/login' component= {UserLogin} exact={true}></Route>

        </Switch>
      </BrowserRouter>
      
    );
  }

  App.propTypes = {
    classes: PropTypes.object.isRequired,
  };


export default  withStyles(styles)(App);
