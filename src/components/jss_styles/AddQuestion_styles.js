//styles for AddQuestions Component
export const styles = theme => ({
  card: { 
    margin: 'auto',
    marginTop: '20%', 
    display: 'flex',
    width: 300,
    [theme.breakpoints.up('md')]: {
      width: 650
    }
  },
  cardContent: {
    flex: 1
  },
  title: { 
    textAlign: 'center' 
  },
  textField: {
    marginBottom: 30,
    marginTop: 10
  }
});