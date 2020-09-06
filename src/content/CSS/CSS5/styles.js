export const getStyles = theme => ({
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
});
