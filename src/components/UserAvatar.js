// vendor import
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

// component import
import Avatar from '@material-ui/core/Avatar';

// material ui import
import { withStyles } from '@material-ui/core/styles';

// image import
import placeholder from '../images/avatar-placeholder.png'


//jss styles
const styles = {
  avatar: {
    margin: 'auto',
  },
}

class UserAvatar extends Component{

  render() {
    const { user: { avatarURL, name }, classes, size } = this.props
    return(
      <Avatar
        style  = {{ width: size, height: size}}
        className= {classes.avatar}
        alt={name}
        src={avatarURL ? avatarURL : placeholder}
        />
    )
  }
}

const mapStateToProps = ({ users }, { id }) => {
  const user = users[id];
  return {
    user,
  };
};

UserAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
  size: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(withStyles(styles)(UserAvatar))