import React, { Component } from 'react';
import Header from './Header'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from '../components/Dashboard'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = {
  appContainer: {
    backgroundColor: '#f8f8f8', 
  }
}


class App extends Component {
  componentDidMount() {
    const {dispatch} = this.props
    dispatch(handleInitialData())
  }

  render() {
    const { classes } = this.props
    return (
      <div className= {classes.appContainer}>
        <Header/>
        <Dashboard />

      </div>
    );
  }
}

export default connect()(withStyles(styles)(App));
