import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import hero from '../images/theThinker.jpg';
import { Route } from 'react-router-dom';
import Nav from './Nav'


const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundImage: `url(${hero})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: 150,
    [theme.breakpoints.up('md')] : {
      height: 250
    },
    [theme.breakpoints.up('lg')] : {
      height: 400
    }
  },
  appbar: {
    backgroundColor: 'rgba(30,30,30,0.5)',
    height: '100%',
    width: '100%'
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    [theme.breakpoints.up('md')] : {
      fontSize: 56,
      marginTop: 30
    },
    [theme.breakpoints.up('lg')] : {
      marginTop: 100,
      fontSize: 88
    }
  },

});

class Header extends Component {
  render(){
    const { classes } = this.props;
    const excludeLogin = (!window.location.pathname.includes('login'))
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
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);