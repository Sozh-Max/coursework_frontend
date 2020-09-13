export const getStyles = theme => ({
  container: {
    marginBottom: 15,
  },
  td: {
    color: 'white',
    border: '1px solid #eee',
    padding: '8px 10px',
    fontSize: 20,
    lineHeight: 1.8,
    width: '50%',
    verticalAlign: 'top',
  },
  input: {
    '& .MuiOutlinedInput-input': {
      padding: '10px 14px',
      color: 'white',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#eee',
    },
    '& .MuiInputLabel-formControl': {
      top: -7,
      color: '#eee',
    },
    '& .MuiInputLabel-shrink': {
      top: 0,
    },
  },
  panelButtons: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: 15,
    marginBottom: 15,
    border: '1px solid #eee',
  },
  tabTh: {
    padding: '5px 10px',
    border: '1px solid #eee',
    fontSize: 10,
    fontWeight: 500,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
  },
  tabTd: {
    padding: '5px 10px',
    border: '1px solid #eee',
    fontSize: 10,
    fontWeight: 500,
    color: 'white',
  },
  date: {
    '& .MuiInputBase-root': {
      color: 'white',
      '&:after': {
        borderColor: 'white',
        color: 'white',
      },
      '&:before': {
        borderColor: 'white',
        color: 'white',
      },
    },
  }
});
