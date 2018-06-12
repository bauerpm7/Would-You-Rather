import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import hero from '../images/theThinker.jpg';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { Link, Route } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';



const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundImage: `url(${hero})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: 150,
    [theme.breakpoints.up('sm')] : {
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
  flex: {
    flex: 1,
  },
  link : {
    color: 'white',
    textDecoration: 'none',
    paddingRight: 30,
    textTransform: 'uppercase'

  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    [theme.breakpoints.up('sm')] : {
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
  constructor(props){
    super(props);
    this.state = {
      isMobile: false,
      anchorEl: null,
    }

    this.updateViewportSize = this.updateViewportSize.bind(this)
  }

  componentDidMount() {
    this.updateViewportSize();
    window.addEventListener('resize', this.updateViewportSize);
  }
  componentWillUnmount() {
    window.addEventListener('resize', this.updateViewportSize)
  }

  updateViewportSize () {
    this.setState({isMobile: window.innerWidth < 600 })
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render(){
    const { classes } = this.props;
    const { isMobile, anchorEl } = this.state;
    return (
      <div className={classes.root}>
        <AppBar className = {classes.appbar} position="static">
          <Toolbar>
            {//Render a burger menu if viewport is < 600 pixels wide
              isMobile ? 
              <Fragment>
                <IconButton 
                  className={classes.menuButton} 
                  color="inherit" 
                  aria-label="Menu"
                  aria-owns={anchorEl ? 'simple-menu' : null}
                  aria-haspopup="true"
                  onClick={this.handleClick}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={this.handleClose}
                >
                  <MenuItem 
                    onClick={this.handleClose}
                    component = {Link}
                    to = '/'
                  >
                    Home
                  </MenuItem>
                  <MenuItem 
                    onClick={this.handleClose}
                    component = {Link}
                    to = '/new'
                  >
                    Ask
                  </MenuItem>
                  <MenuItem 
                    onClick={this.handleClose}
                    component = {Link}
                    to = '/leaderboard'
                  >
                    LeaderBoard
                  </MenuItem>
                </Menu>
              </Fragment> : //render a nav menur if viewport > 600 pixels wide
              <nav className={classes.nav}>
                  <Link className = {classes.link} to='/' >Home</Link>
                  <Link className = {classes.link} to = '/new' >Ask</Link>
                  <Link className = {classes.link} to='/leaderboard'>Leaderboard</Link>
              </nav>
            }
            <div className={classes.flex}></div>
            <Button className = {classes.logout} color="inherit">Logout</Button>
          </Toolbar>
          {//Dynamically render header title based on url
          }
          <Route path='/' exact render={() => { return (
            <Typography className = {classes.title} variant = 'display3' color="inherit" >Would You Rather?</Typography>
          )}}/>
          <Route path='/new' exact render={() => { return (
            <Typography className = {classes.title} variant = 'display3' color="inherit" >Ask a new question?</Typography>
          )}}/><Route path='/leaderboard' exact render={() => { return (
            <Typography className = {classes.title} variant = 'display3' color="inherit" >Leaderboard?</Typography>
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