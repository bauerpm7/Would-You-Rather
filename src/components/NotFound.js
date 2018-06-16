import React from 'react';
import { withStyles } from '@material-ui/core/styles';

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

export default withStyles(styles)(NotFound)