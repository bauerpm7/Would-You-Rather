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
import { Link, Route, withRouter } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { setAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux'



const styles = theme => ({
  link : {
    color: 'white',
    textDecoration: 'none',
    paddingRight: 30,
    textTransform: 'uppercase'
  },
  flex: {
    flex: 1,
  },
});

class Nav extends Component {
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



  handleSubmit () {
      const { setAuthedUser }  = this.props
      setAuthedUser(null);
  }

  render(){
    const { classes } = this.props;
    const { isMobile, anchorEl } = this.state;
    const excludeLogin = (!window.location.pathname.includes('login'))
    return (
      <Fragment>
            {//Render a burger menu if viewport is < 600 pixels wide
              isMobile ? 
              <Fragment>
                <IconButton  
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
            <Button 
              className = {classes.logout} 
              color="inherit"
              onClick = {() => this.handleSubmit()}
            >Logout</Button>
      </Fragment>
          
    );
  }
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = (props) => {
  return {
    ...props
  }
}

export default connect(mapStateToProps, { setAuthedUser })(withStyles(styles)(Nav))