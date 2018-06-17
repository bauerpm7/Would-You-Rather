import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { formatDate } from '../utils/helpers'
import { withStyles } from '@material-ui/core/styles';
import UserAvatar from './UserAvatar';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const styles = theme => ({
  questionCard: {
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    width: 300,
    marginTop: 40,
    marginRight: 'auto',
    marginLeft: 'auto',
    textAlign: 'center',
    [theme.breakpoints.up('sm')] : {
      width: 475,
      flexDirection: 'row'
    },
    [theme.breakpoints.up('md')] : {
      width: 650,
      flexDirection: 'row'
    },
  },
  link: {
    textDecoration: 'none'
  },
  questionInfo: {
    backgroundColor: '#3f51b5',
    color: '#fff',
    width: 300,
    display: 'flex',
    flexDirection:'column',
    padding: 0,
    paddingTop: 15,
    paddingBottom: 15,
    [theme.breakpoints.up('sm')] : {
      width: 200,
      minWidth: 150
    },
  },
  avatar: {
    margin: 'auto',
    width: 60,
    height: 60,
  },
  authorName: {
    paddingTop: 20,
    textTransform: 'uppercase',
    color: '#fff'
  },
  date: {
    color: '#fff'
  },
  disabledButton: { 
    marginTop: 5,
    marginBottom: 5,
    margin: 'auto',
    textTransform: 'uppercase',
    width: '90%',
    border: '0.5px solid black',
    borderRadius: 2,
    paddingTop: 10,
    paddingBottom: 10

  },
  questionContent: {
    [theme.breakpoints.up('sm')] : {
      width: 325,
    },
   [theme.breakpoints.up('md')] : {
      width: 450,
    },
  }
})


class QuestionCard extends Component {
  render() {
    const { question : { id, optionOne, optionTwo, timestamp },  author, classes
           } = this.props
    const date = formatDate(timestamp)

    return (
      <Fragment>
        <Card className = {classes.questionCard} >
          <CardContent className={classes.questionInfo}>
            <Link className = {classes.link} to = {`/user/${author.id}`}>
              <UserAvatar size = {60} id = {author.id}
              />
              <Typography variant='body1' className = {classes.authorName} >{author.name}</Typography>
              <Typography variant='body1' className = {classes.date} >{date}</Typography>
            </Link>
          </CardContent>
          <CardContent className = {classes.questionContent}>
            <Link className = {classes.link} to = {`/question/${id}`}>
              <Typography variant = 'title'> Would you rather ... ?</Typography>
              <Typography color="primary" className={classes.disabledButton}>
                {optionOne.text}
              </Typography>
              <Typography color="secondary" className={classes.disabledButton}>
                {optionTwo.text}
              </Typography>
            </Link>
          </CardContent> 
        </Card>
      </Fragment>
    )
  }
}


const mapStateToProps = ({ questions, users, authedUser }, { id }) => {
  const question = questions[id];
  
  return {
    question,
    author: users[question.author],
  };
};

QuestionCard.propTypes = {
  classes: PropTypes.object.isRequired,
  question: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired
}


export default connect(mapStateToProps)(withStyles(styles)(QuestionCard))