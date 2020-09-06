export const getStyles = theme => ({
  block: {
    marginBottom: 20,
  },
  title: {
    fontWeight: 700,
    marginBottom: 10,
  },
  example: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  item: {
    margin: 3,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#eee',
    lineHeight: '28px',
    textAlign: 'center',
    borderRadius: '50%',
    width: 30,
    height: 30,
  },
  exampleFirst: {
    '&>div:first-child': {
      color: 'red',
      borderColor: 'red',
    },
  },
  exampleLast: {
    '&>div:last-child': {
      color: 'red',
      borderColor: 'red',
    },
  },
  exampleEven: {
    '&>div:nth-child(even)': {
      color: 'red',
      borderColor: 'red',
    },
  },
  exampleOdd: {
    '&>div:nth-child(odd)': {
      color: 'red',
      borderColor: 'red',
    },
  },
  exampleMany: {
    '&>div:nth-child(5n+1)': {
      color: 'red',
      borderColor: 'red',
    },
    '&>div:nth-child(5n+2)': {
      color: 'red',
      borderColor: 'red',
    },
  },
  exampleElem: {
    '&>div:nth-child(5)': {
      color: 'red',
      borderColor: 'red',
    },
  },
  exampleExclude: {
    '&>div:not(:nth-child(6))': {
      color: 'red',
      borderColor: 'red',
    },
  }
});
