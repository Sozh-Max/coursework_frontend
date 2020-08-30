import React from 'react';
import parse from 'html-react-parser';

import Box from '@material-ui/core/Box';

export const HTML1 = () => (
  <Box>
    {parse(
      "<pre>    Владей собой среди толпы смятенной,<br>    Тебя клянущей за смятенье всех,<br>    Верь сам в себя наперекор вселенной,<br>    И маловерным отпусти их грех;</pre>"
    )}
  </Box>
)

