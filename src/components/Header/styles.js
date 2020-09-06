export const getStyles = theme => ({
  wrapper: {
    textAlign: 'center',
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 'auto',
    height: 70,
    position: 'relative',
  },
  title: {
    transform: 'translateY(-50%) translateX(-50%)',
    fontSize: 24,
    position: 'absolute',
    zIndex: 10,
    left: '50%',
    top: '50%',
    lineHeight: 1,
  },
  [theme.breakpoints.up('lg')]: {
    title: {
      fontSize: 36,
    }
  },
});
