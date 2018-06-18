// vendor import
import React from 'react';
import PropTypes from 'prop-types';

// material ui import
import { withStyles } from '@material-ui/core/styles';

//component import
import NewUserCard from './NewUserCard'


// jss styles
const styles = {
 container: {
  height: '100%'
 }
}

function NewUser (props) {
  const { classes } = props
  return (
    <div className = {classes.container}>
    <NewUserCard />
    </div>
  )
}
NewUser.propTypes = {
  classes: PropTypes.object.isRequired
}
 
export default withStyles(styles)(NewUser)