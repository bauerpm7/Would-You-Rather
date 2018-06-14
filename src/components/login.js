import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import LoginCard from './LoginCard'
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
  
export default withStyles(styles)(Login)