//styles for LoginCard

export const styles = theme => ({
  loginCard: {
    height: 350,
    width: 300,
    margin: 'auto',
    marginTop: '10%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',[theme.breakpoints.up('md')] : {
      width: 600
    }
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
    padding: 30,
    [theme.breakpoints.up('md')] : {
      paddingLeft: 100,
      paddingRight: 100
    }
  },
  warning: {
    textAlign: 'center',
    color: '#f01659',
    marginBottom: -31,
    [theme.breakpoints.up('sm')] : {
      marginTop: 50,
      marginBottom: -71,
    },
    paddingBottom: 20
  },
  loginHeader: {
    backgroundColor: '#3f51b5',
    color: '#fff'
  }
})