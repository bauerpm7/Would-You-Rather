import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { handleCreateUser } from '../actions/users';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  loginCard: {
    height: 350,
    width: 300,
    margin: 'auto',
    marginTop: '20%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  button: {
    width: '50%',
    margin: 'auto',
    marginTop: 20,
    marginBottom: 20
  },
  input: {
    marginBottom: 30
  },
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    padding: 30
  },
  warning: {
    textAlign: 'center',
    color: '#f01659',
    marginBottom: -31,
    [theme.breakpoints.up('sm')] : {
      marginTop: 50,
      marginBottom: -71,
    },
  },
  loginHeader: {
    backgroundColor: '#3f51b5',
    color: '#fff'
  }
})

class NewUserCard extends Component{

  state = {
      username: '',
      password: '',
      fullName: '',
      invalidCredentials: false
  }

handleSubmit () {
    const { handleCreateUser, history, users }  = this.props
    const { fullName, username, password } = this.state
    if (document.getElementById('fullName').value !=='' &&
        document.getElementById('username').value !=='' &&
        document.getElementById('password').value !=='' 
        ){
      if(Object.keys(users).indexOf(username) >= 0){
        return alert('Username already exists')
      } else{
        handleCreateUser(fullName, username, password)
        history.push('/login') 
        return
      }
    }
    this.setState({invalidCredentials: true})
  }

  handleOnChange(option, text) {
    if (option === 'fullName'){
      this.setState({fullName: text})
    }
    if (option === 'username'){
      this.setState({username: text})
    }
    if (option === 'password'){
      this.setState({password: text})
    }
    
  }

  render() {
    const { classes } = this.props
    const { fullName, username, password, invalidCredentials } = this.state
    return (
      <Fragment>
        {invalidCredentials ? <h3 className = {classes.warning} >All fields are required</h3> 
        : null
        }
        <Card className = {classes.loginCard}>
          <div className = {classes.loginHeader}>
            <h2> Create New User </h2>
          </div>
          <form className = {classes.loginForm}>
            <Input
              id='fullName'
              className = {classes.input}
              placeholder="full name"
              onChange={(e) => this.handleOnChange('fullName', e.target.value)}>
            </Input>
            <Input
              id='username'
              className = {classes.input}
              placeholder="username"
              onChange={(e) => this.handleOnChange('username', e.target.value)}>
            </Input>
            <Input
              id='password'
              className = {classes.input}
              placeholder="password"
              onChange={(e) => this.handleOnChange('password', e.target.value)}>
            </Input>
            
            <Button
              className = {classes.button}
              variant = 'contained'
              color = 'secondary'
              onClick={() => {
                this.handleSubmit()
                }
              }
            >
                Submit
            </Button>
          </form>
        </Card>
      </Fragment>
    )
  }
}

const mapStateToProps = ( { users }, props) => {
  return {
    users,
    ...props
  }
}

export default withRouter(connect(mapStateToProps, { handleCreateUser })(withStyles(styles)(NewUserCard)))