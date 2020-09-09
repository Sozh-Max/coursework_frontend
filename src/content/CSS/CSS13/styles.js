export const getStyles = theme => ({
  container: {
    display: 'flex',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 5,
    minHeight: 100,
  },
  block: {
    marginBottom: 15,
  },
  title: {
    marginBottom: 5,
  },
  item: {
    padding: '3px 15px',
    margin: 5,
    backgroundColor: 'blue',
  },
  itemRight: {
    marginLeft: 'auto',
  },
  item1: {
    order: 3,
  },
  item2: {
    order: 2,
  },
  item3: {
    order: 1,
  },
  variant1: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  variant2: {
    alignItems: 'center',
    justifyContent: 'start',
  },
  variant3: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  [theme.breakpoints.up('lg')]: {
    variant3: {
      flexDirection: 'column',
    },
  },
});
