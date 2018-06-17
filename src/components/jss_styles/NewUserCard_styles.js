//Styles for NewUserCard

export const styles = theme => ({
  loginCard: {
    height: 350,
    width: 300,
    margin: 'auto',
    marginTop: '10%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  button: {
    width: '50%',
    margin: 'auto',
    marginTop: 5,
    marginBottom: 5
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