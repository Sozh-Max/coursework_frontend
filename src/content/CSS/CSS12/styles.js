export const getStyles = theme => ({
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  element1: {
    padding: 10,
    margin: 5,
    backgroundColor: 'red',
    transition: 'all 500ms',
    '&:hover': {
      transform: 'rotate(360deg)',
    }
  },
  element2: {
    padding: 10,
    margin: 5,
    backgroundColor: 'yellow',
    transition: 'all 500ms',
    color: 'black',
    '&:hover': {
      transform: 'scale(2)',
    }
  },
  element3: {
    padding: 10,
    margin: 5,
    backgroundColor: 'blue',
    transition: 'all 500ms',
    '&:hover': {
      transform: 'skew(-45deg, -15deg)',
    }
  },
  element4: {
    padding: 10,
    margin: 5,
    backgroundColor: 'green',
    transition: 'all 500ms',
    '&:hover': {
      transform: 'translate(-30px)',
    }
  },
  element5: {
    padding: 10,
    margin: 5,
    backgroundColor: 'purple',
    transition: 'all 500ms',
    '&:hover': {
      transform: 'rotate(30deg)',
    }
  },
});
