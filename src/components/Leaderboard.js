import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import MobileLeaderboard from './MobileLeaderboard';
import WideLeaderboard from './WideLeaderboard'

const styles = theme => ({
  root: {
    width: 300,
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
      width: 500
    },
    [theme.breakpoints.up('md')]: {
      width: 700
    },
    paddingTop: "15%",
  },
    
})

class Leaderboard extends Component {

   constructor(props){
    super(props);
    this.state = {
      isMobile: false,
    }

    this.updateViewportSize = this.updateViewportSize.bind(this)
  }

  componentDidMount() {
    this.updateViewportSize();
    window.addEventListener('resize', this.updateViewportSize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateViewportSize)
  }

  updateViewportSize () {
    this.setState({isMobile: window.innerWidth < 600 })
  }
  render() {
    const { users, classes } = this.props;
    const { isMobile } = this.state
    return (
      <div className= {classes.root}>
      {isMobile ?
        <MobileLeaderboard 
          users = { users } 
        /> :
        <WideLeaderboard
          users = { users }
        />
        } 
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users: users 
    ? Object.values(users)
      .map(({ id, name, answers, questions }) => ({
        id,
        name,
        asked: questions
          ? questions.length
          : 0,
        answered: answers
          ? Object.keys(answers).length
          : 0,
      }))
      .sort((a, b) => (b.asked + b.answered) - (a.asked + a.answered))
    : []
  }
};

Leaderboard.propTypes = {
  classes : PropTypes.object.isRequired,
  history : PropTypes.object.isRequired,
  users : PropTypes.array.isRequired
}

export default connect(mapStateToProps)(withStyles(styles)(Leaderboard))