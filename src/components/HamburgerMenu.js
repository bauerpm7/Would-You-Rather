//vendor imports
import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';

//material ui imports
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class HamburgerMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
      anchorEl: null,
    }
  }

  //handle click event on burger menu icon and menu items
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  //close the hamburger menu
  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state
    return(
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
            to = '/new_question'
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
      </Fragment>
    )
  }
}

export default HamburgerMenu;