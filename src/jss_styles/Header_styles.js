import hero from '../images/theThinker.jpg';

export const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundImage: `url(${hero})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: 150,
    [theme.breakpoints.up('md')] : {
      height: 250
    },
    [theme.breakpoints.up('lg')] : {
      height: 400
    }
  },
  appbar: {
    backgroundColor: 'rgba(30,30,30,0.5)',
    height: '100%',
    width: '100%'
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    [theme.breakpoints.up('md')] : {
      fontSize: 56,
      marginTop: 30
    },
    [theme.breakpoints.up('lg')] : {
      marginTop: 100,
      fontSize: 88
    }
  },
});