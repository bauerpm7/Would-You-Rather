import React, { Component } from 'react';
import Header from './Header'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class App extends Component {
  componentDidMount() {
    const {dispatch} = this.props
    dispatch(handleInitialData())
  }

  render() {
    console.log(this.props.users)
    return (
      <div>
        <Header/>

      </div>
    );
  }
}

export default connect()(App);
