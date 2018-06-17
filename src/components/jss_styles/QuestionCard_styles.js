//Styles for QuestionCard and QuestionDetails components

export const styles = theme => ({
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
  button: {
    width: '90%',
    marginTop: 5,
    marginBottom: 5
  },
  questionContent: {
    [theme.breakpoints.up('sm')] : {
      width: 325,
    },
   [theme.breakpoints.up('md')] : {
      width: 450,
    },
  },
  container: {
    width: 325,
    height: 325,
    margin: 'auto',
    marginTop: -30,
    textAlign: 'center',
    [theme.breakpoints.up('md')] : {
      width: 450,
      height: 450
    },
  },
  title: {
    marginTop: 40,
    textAlign: 'center'
  }
})