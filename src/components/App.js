import React, { Component, Fragment } from 'react';
import Header from './Header'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from '../components/Dashboard'
import LoadingBar from 'react-redux-loading';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute'
import Login from './Login'
import NewUser from './NewUser'




class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
    <Router>
      <Fragment>
        <LoadingBar />
        <div >
          <Header/>
            <Switch>
              <PrivateRoute path = '/' exact component={Dashboard}/>
              <Route path = '/login' component = {Login} />
              <Route path = '/create' component = {NewUser} />
            </Switch>
        </div>
      </Fragment>
      </Router>
    );
  }
}



export default connect()(App);

