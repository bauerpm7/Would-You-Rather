import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import NewUserCard from './NewUserCard'
import PropTypes from 'prop-types';

const styles = {
 container: {
  height: '100%'
 }
}

class NewUser extends Component {

  render(){
    const { classes } = this.props
    return (
      <div className = {classes.container}>
      <NewUserCard />
      </div>

    )
  }
}

NewUser.propTypes = {
  classes: PropTypes.object.isRequired
}
 
export default withStyles(styles)(NewUser)