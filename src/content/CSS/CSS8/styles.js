export const getStyles = theme => ({
  wrapper: {
    '& [data-attribute="name"]': {
      color: 'red',
    },
    '& [data-attribute^="start"]': {
      color: 'yellow',
    },
    '& [data-attribute$="finish"]': {
      color: 'green',
    },
    '& [data-attribute*="center"]': {
      color: 'blue',
    },
  }
});
