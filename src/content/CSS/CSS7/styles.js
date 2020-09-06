export const getStyles = theme => ({
  textContainer: {
    columnCount: 1,
    columnGap: 0,
  },
  text: {
    '&::first-letter': {
      textTransform: 'normal',
      fontSize: 16,
    }
  },
  textDots: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginBottom: 30,
  },
  [theme.breakpoints.up('lg')]: {
    textContainer: {
      columnCount: 2,
      columnGap: 30,
    },
    text: {
      '&::first-letter': {
        textTransform: 'uppercase',
        fontSize: 30,
      }
    },
    textDots: {
      whiteSpace: 'normal',
      overflow: 'auto',
    },
  },
});
