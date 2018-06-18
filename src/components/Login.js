// vendor imports
import React from 'react';
import PropTypes from 'prop-types';

// material ui import
import { withStyles } from '@material-ui/core/styles';

// component import
import LoginCard from './LoginCard';


// jss styles
const styles = {
 container: {
  height: '100%'
 }
}

function Login (props) {
  const { classes } = props
  return (
    <div className = {classes.container}>
      <LoginCard />
    </div>
  )
}
// PropTypes
Login.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Login)