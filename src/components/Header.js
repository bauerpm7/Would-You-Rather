import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Route } from 'react-router-dom';
import Nav from './Nav'
import { styles } from '../jss_styles/Header_styles'


class Header extends Component {
  render(){
    const { classes } = this.props;
    const excludeLogin = (!window.location.pathname.includes('login')) && (!window.location.pathname.includes('create'))
    return (
      <div className={classes.root}>
        <AppBar className = {classes.appbar} position="static">
          <Toolbar>
          { excludeLogin &&
            <Nav/>
          }
          </Toolbar>
          {//Dynamically render header title based on url
          }
          <Route path='/' exact render={() => { return (
            <Typography className = {classes.title} variant = 'display3' color="inherit" >Would You Rather...?</Typography>
          )}}/>
          <Route path='/new_question'  render={() => { return (
            <Typography className = {classes.title} variant = 'display3' color="inherit" >Ask a new question?</Typography>
          )}}/>
          <Route path='/leaderboard'  render={() => { return (
            <Typography className = {classes.title} variant = 'display3' color="inherit" >Leaderboard?</Typography>
          )}}/>
          <Route path='/login'  render={() => { return (
            <Typography className = {classes.title} variant = 'display3' color="inherit" >Would You Rather...?</Typography>
          )}}/>
          <Route path='/user' render={() => { return (
            <Typography className = {classes.title} variant = 'display3' color="inherit" >User Profile?</Typography>
          )}}/>
          <Route path='/question' render={() => { return (
            <Typography className = {classes.title} variant = 'display3' color="inherit" >Take The Poll?</Typography>
          )}}/>
          <Route path='/create' render={() => { return (
            <Typography className = {classes.title} variant = 'display3' color="inherit" >Register?</Typography>
          )}}/>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);