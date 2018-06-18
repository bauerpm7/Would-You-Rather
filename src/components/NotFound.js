// vendor imports
import React from 'react';
import PropTypes from 'prop-types';

// material ui imports
import { withStyles } from '@material-ui/core/styles';

// jss styles
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