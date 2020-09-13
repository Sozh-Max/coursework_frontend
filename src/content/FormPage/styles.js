export const getStyles = theme => ({
  container: {
    marginBottom: 15,
    borderColor: '#a9cadc',
  },
  legend: {
    marginLeft: 20,
    paddingLeft: 5,
    paddingRight: 5,
    color: '#81d4fa',
    fontWeight: 700,
  },
  tableWrapper: {
    padding: 10,
  },
  td: {
    color: 'white',
    border: '1px solid #eee',
    padding: '8px 10px',
    fontSize: 16,
    lineHeight: 1.6,
    width: '33.3333%',
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
  select: {
    width: 210,
    '& .MuiOutlinedInput-input': {
      paddingTop: 7,
      paddingBottom: 7,
    },
    '& .MuiSelect-selectMenu': {
      border: '1px solid #eee',
      borderRadius: 3,
      color: 'white',
      paddingLeft: 14,
    },
    '& .MuiSelect-icon': {
      color: '#eee',
    }
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
});
