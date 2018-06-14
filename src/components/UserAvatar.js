import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import placeholder from '../images/avatar-placeholder.png'

const styles = {
  avatar: {
    margin: 'auto',
    width: 60,
    height: 60,
  },
}

class UserAvatar extends Component{

  render() {
    const { user: { avatarURL, name }, classes } = this.props
    return(
      <Avatar
        className= {classes.avatar}
        alt={name}
        src={avatarURL ? avatarURL : placeholder}
        />
    )
  }
}

const mapStateToProps = ({  users }, { id }) => {
  const user = users[id];
  console.log(users[id])
  return {
    user,
  };
};


export default connect(mapStateToProps)(withStyles(styles)(UserAvatar))