import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import hero from '../images/theThinker.jpg';



const styles = {
  root: {
    flexGrow: 1,
    backgroundImage: `url(${hero})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: 150
  },
  appbar: {
    backgroundColor: 'rgba(30,30,30,0.5)',
    height: '100%'
  },
  title: {
    textAlign: 'center',
    marginTop: 100
  }

};

function Header(props) {
  const { classes } = props;
  return (
      <div className={classes.root}>
        <AppBar className = {classes.appbar} position="static">
          <Toolbar>
            <Button className = {classes.logout} color="inherit">Logout</Button>
          </Toolbar>
          <Typography className = {classes.title} variant = 'display3' color="inherit">Would You Rather?</Typography>
        </AppBar>
      </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);