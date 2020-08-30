export const getStyles = theme => ({
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    border: '1px solid white',
    marginTop: 5,
    marginBottom: 5,
  },
  item: {
    display: 'block',
    padding: 5,
    margin: 3,
    textDecoration: 'none',
    border: '1px solid white',
    color: 'white',
    '&:hover': {
      color: theme.mainStyles.colorLink,
      borderColor: theme.mainStyles.colorLink,
    },
    '&.selected': {
      color: theme.mainStyles.colorLink,
      borderColor: theme.mainStyles.colorLink,
    }
  }
});
