export const getStyles = theme => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    flexGrow: 1,
    minHeight: '30vh',
    marginTop: 10,
    marginBottom: 10,
  },
  description: {
    display: 'none',
    flexBasis: '25%',
    padding: 10,
    boxShadow: '0 0 5px rgba(255, 255, 255, 0.2)',
  },
  content: {
    flexBasis: '100%',
    maxWidth: '100%',
    padding: 10,
  },
  [theme.breakpoints.up('sm')]: {
    content: {
      flexBasis: '75%',
      maxWidth: '75%',
    },
    description: {
      display: 'block',
    }
  },
});
