// vendor imports
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

// material ui imports
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// function imports from actions
import { setAuthedUser } from '../actions/authedUser'

// component imports
import UserAvatar from './UserAvatar'
import HamburgerMenu from './HamburgerMenu'

//jss styles
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
    // initial state for component
    this.state = {
      isMobile: false,
      anchorEl: null,
    }

    this.updateViewportSize = this.updateViewportSize.bind(this)
  }

  //listen for changes to viewport width
  componentDidMount() {
    this.updateViewportSize();
    window.addEventListener('resize', this.updateViewportSize);
  }

  //stop listening for chages to the viewport width
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateViewportSize)
  }

  // toggle the state of isMobile based on the width of the viewport
  updateViewportSize () {
    this.setState({isMobile: window.innerWidth < 600 })
  }

  //handle submission of the logout button
  handleSubmit () {
      const { setAuthedUser }  = this.props
      setAuthedUser(null);
  }

  render(){
    const { classes, authedUser } = this.props;
    const { isMobile } = this.state;
    return (
      <Fragment>
            {//Render a burger menu if viewport is < 600 pixels wide
              isMobile ? 
              <HamburgerMenu/>
              : //render a nav menur if viewport > 600 pixels wide
              <nav className={classes.nav}>
                  <Link className = {classes.link} to='/' >Home</Link>
                  <Link className = {classes.link} to = '/new_question' >Ask</Link>
                  <Link className = {classes.link} to='/leaderboard'>Leaderboard</Link>
              </nav>
            }
            <div className={classes.flex}></div>
            { authedUser ? <UserAvatar size = {40} id = {authedUser}/> : null}
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

const mapStateToProps = ({authedUser}, props) => {
  return {
    authedUser,
    ...props
  }
}

export default connect(mapStateToProps, { setAuthedUser })(withStyles(styles)(Nav))