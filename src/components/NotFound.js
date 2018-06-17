import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
  container: {
    textAlign: 'center'
  }
}
function NotFound (props) {
  const {classes} = props
  return(
    <div className = {classes.container}>
      <h1>404</h1>
      <h3>Sorry....Page not found</h3>
    </div>
    )
}

NotFound.propTypes = { 
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NotFound)