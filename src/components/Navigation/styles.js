export const getStyles = theme => ({
  wrapper: {
    marginBottom: 15,
    border: `1px solid ${theme.mainStyles.colorText}`,
    padding: 5,
  },
  list: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    marginLeft: '2%',
    marginRight: '2%',
    fontWeight: 700,
    transition: '150ms',
    fontSize: 20,
    '& a.MuiBox-root': {
      color: 'white',
      '&:hover': {
        color: theme.mainStyles.colorLink,
      },
      '&.selected': {
        color: theme.mainStyles.colorLink,
      },
    }
  },
  itemLink: {
    textDecoration: 'none',
  }
});
