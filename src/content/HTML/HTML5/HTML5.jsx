import React from 'react';
import parse from 'html-react-parser';

import Box from '@material-ui/core/Box';

import { textTeg } from './utils';

export const HTML5 = () => {

  return (
    <Box>
      {parse(textTeg)}
     </Box>
  )
}

