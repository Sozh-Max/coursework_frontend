export const getStyles = theme => ({
  wrapper: {
    height: '100%',
    overflow: 'auto',
    maxWidth: 1400,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  th: {
    padding: 3,
    border: '1px solid #eee',
    textAlign: 'center',
    lineHeight: 1.1,
    fontSize: 12,
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  td: {
    padding: 3,
    border: '1px solid #eee',
    textAlign: 'center',
    lineHeight: 1.1,
    fontSize: 12,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
  },
  guessed: {
    backgroundColor: 'blue',
  },
  selected: {
    backgroundColor: 'red',
  },
  check: {
    backgroundColor: 'purple',
  },
  bottomPanel: {
    paddingTop: 25,
    paddingBottom: 25,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
});
