import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import LoginCard from './LoginCard';
import PropTypes from 'prop-types';

const styles = {
 container: {
  height: '100%'
 }
}

class Login extends Component {

  render(){
    const { classes } = this.props
    return (
      <div className = {classes.container}>
      <LoginCard />
      </div>

    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Login)