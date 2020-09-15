import React, { useEffect, useRef } from 'react';

import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { goToDown, goTo, goToRight, initPositionElement } from './utils';

import { getStyles } from './styles';

const useStyles = makeStyles(getStyles);

export const JS2 = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const wrapperElement = useRef(null);
  const movingElement = useRef(null);

  const keyboardEventHandler = e => {
    console.log(e)
    if (e.keyCode === 87) goTo(movingElement, 'top');
    if (e.keyCode === 83) goToDown(movingElement, wrapperElement);
    if (e.keyCode === 65) goTo(movingElement, 'left');
    if (e.keyCode === 68) goToRight(movingElement, wrapperElement);
  };

  useEffect(() => {
    initPositionElement(movingElement, wrapperElement);
    window.addEventListener('keydown', keyboardEventHandler);
    return () => window.removeEventListener('keydown', keyboardEventHandler);
  }, [])

  return (
    <Box>
      <Box className={classes.title}>
        Для движения вверх нажмите кнопку "w", для движения вниз нажмите кнопку "s", ждя движения влево нажмите кнопку "a", для движения вправо нажмите кнопку "d".
      </Box>
      <Box
        ref={wrapperElement}
        className={classes.wrapper}
      >
        <Box>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus tellus eget lacus auctor, ut venenatis nisl tristique. Nullam eros nibh, mollis non rutrum eu, sodales sed mauris. Ut id ultrices dui. Donec eu eros dolor. Praesent suscipit justo in fermentum maximus. Nulla sit amet porta lectus. Phasellus nisi nisi, elementum quis elit sit amet, consectetur lobortis nisi. Suspendisse sit amet justo lobortis, tempor mauris vel, congue ipsum.
        </Box>
        <Box>
          Etiam maximus maximus nisl sed pellentesque. Proin interdum facilisis rutrum. Nunc quis quam imperdiet, imperdiet enim eu, tristique lorem. Duis porta est eu lorem ullamcorper, at rutrum arcu rhoncus. In blandit sapien nec purus laoreet, rhoncus gravida elit pharetra. Aenean condimentum volutpat nulla, condimentum pellentesque nulla commodo quis. Aliquam non faucibus ex. Donec at augue sit amet libero facilisis vestibulum quis sit amet tellus. Nulla ut iaculis nibh. Nam sodales sodales ex, quis vulputate lorem dictum nec. Curabitur at egestas augue. Praesent a enim eu diam viverra egestas ac at arcu. Ut semper dignissim augue, eu elementum felis molestie vel. Suspendisse a dui ut ipsum aliquet feugiat et sit amet arcu. Proin luctus eros id porttitor cursus.
        </Box>
        <Box>
          Nullam porta libero et gravida vehicula. Morbi pharetra laoreet arcu, sit amet euismod metus laoreet ac. Maecenas sit amet congue nulla. Maecenas hendrerit eu ante vel eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc luctus posuere nisl, id sagittis nunc aliquet vel. Aliquam massa diam, rutrum eget ligula ac, fringilla volutpat nunc. Fusce ac tincidunt leo, vestibulum fermentum enim. Nunc turpis nibh, tempor eget elementum ut, pellentesque sit amet urna. Aenean accumsan magna vel eros tempus tempor. Mauris rutrum eros quis rutrum cursus. Sed eget justo eget lacus auctor posuere ac sit amet leo. Duis eu tellus pharetra, efficitur erat eget, posuere diam.
        </Box>
        <Box>
          Nam et volutpat velit. Vestibulum elementum aliquet urna, vitae posuere mauris gravida at. Aenean vulputate posuere ultrices. Sed vehicula dictum est sit amet molestie. Nulla facilisi. Sed semper metus id venenatis luctus. Nullam dapibus et ex sed scelerisque. Curabitur tempor magna leo, vitae malesuada dolor ullamcorper ut. Morbi purus turpis, lobortis nec metus ut, faucibus rutrum diam. Etiam urna magna, bibendum non justo non, pellentesque iaculis urna. Nam ut arcu fringilla, pulvinar tortor eu, convallis tortor. Nulla eu hendrerit lectus, non condimentum urna.
        </Box>
        <Box
          ref={movingElement}
          className={classes.element}
        >
          Максим
        </Box>
      </Box>
    </Box>
  )
}