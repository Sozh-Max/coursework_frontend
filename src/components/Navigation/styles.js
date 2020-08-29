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
    cursor: 'pointer',
    fontWeight: 700,
    transition: '150ms',
    fontSize: 20,
    '&:hover': {
      color: theme.mainStyles.colorLink,
    },
    '&.active': {
      color: theme.mainStyles.colorLink,
    },
  },
});
