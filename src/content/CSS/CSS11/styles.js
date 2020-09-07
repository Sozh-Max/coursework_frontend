export const getStyles = theme => ({
  wrapper: {
    background: 'linear-gradient(#a5d1ff,#999966)',
    padding: 30,
  },
  text1: {
    marginBottom: 15,
    fontSize: 20,
    textShadow: '-4px -4px 4px #111111',
  },
  text2: {
    marginBottom: 15,
    fontSize: 24,
    textShadow: '-4px -4px red, -8px -8px blue, -12px -12px #111111',
  },
  blockContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  block: {
    width: 300,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30,
  },
  title: {
    textAlign: 'center',
    fontWeight: 700,
    marginBottom: 15,
  },
  image: {
    width: '100%',
  },
  imageOpacity: {
    width: '100%',
    filter: 'opacity(50%)',
  },
  imageSepia: {
    width: '100%',
    filter: 'sepia(100%)',
  },
  imageGrayscale: {
    width: '100%',
    filter: 'grayscale(100%)',
  },
  imageInvert: {
    width: '100%',
    filter: 'invert(100%)',
  },
});
