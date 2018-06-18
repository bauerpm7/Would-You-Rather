// vendor imports
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// material ui imports
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// component import
import UserAvatar from './UserAvatar';

// jss styles import
import { styles } from './jss_styles/QuestionCard_styles'

// helper function import from utils
import { formatDate } from '../utils/helpers'


/**
 * render a card with author info and question options
 */
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