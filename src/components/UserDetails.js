import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import QuestionCard from './QuestionCard';
import UserAvatar from './UserAvatar';
import NotFound from './NotFound';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { styles } from './jss_styles/UserDetails_styles'

class UserDetails extends Component {
  render() {
    const { classes, user, asked, answered, notFound } = this.props;

    if (notFound) {
      return <NotFound />
    }

    return (
      <div className={ classes.container }>
        <Card className={classes.userCard}>
          <CardContent className={classes.userName}>
            <UserAvatar size = {80} className = {classes.avatar} id={user.id} />
            <h2>{user.name}</h2>
            {
              asked &&
              <h3>Asked: {asked.length}</h3>
            }
            {
              answered &&
              <h3>Answered: {answered.length}</h3>
            }
            <h3>Score: {asked.length + answered.length}</h3>
          </CardContent>
        </Card>

        <div>
          <h2>Asked ({asked.length})</h2>
        {
          asked &&
          asked.map(id => <QuestionCard key={id} id={id} />)
        }
        </div>
        <div>
        <h2>Answered ({answered.length})</h2>
        {
          answered &&
          answered.map(id => <QuestionCard key={id} id={id} />)
        }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ users, questions }, props) => {
  const { id } = props.match.params;
  const user = users[id];

  if (!user) {
    return {
      notFound: true
    }
  }
  return {
    user,
    asked: user.questions
      ? user.questions
      : [],
    answered: user.answers
      ? Object.keys(user.answers)
      : []
  }
};

UserDetails.propTypes = { 
  classes: PropTypes.object.isRequired, 
  user: PropTypes.object.isRequired, 
  asked: PropTypes.array.isRequired, 
  answered: PropTypes.array.isRequired, 
  notFound: PropTypes.bool
}

export default connect(mapStateToProps)(withStyles(styles)(UserDetails));