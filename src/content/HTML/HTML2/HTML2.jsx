import React from 'react';

import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { getStyles } from './styles';

const useStyles = makeStyles(getStyles);

export const HTML2 = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box>
      Шли по лесу два товарища, и вскочил на них медведь. Один бросился бежать, влез на дерево и спрятался, а другой остался на дороге. Делать ему нечего он упал наземь и притворился мёртвым.
      Медведь подошёл к нему и стал нюхать: он и дышать перестал.
      Медведь понюхал ему лицо, подумал, что мёртвый, и отошёл.
      <Box
        component='blockquote'
        className={classes.blockquote}
      >
        Медведь подошёл к нему и стал нюхать: он и дышать перестал.
      </Box>
      Когда медведь ушёл, тот слез с дерева и смеётся.
      — Ну что,- говорит,- медведь тебе на ухо говорил?
      <Box
        component='blockquote'
        className={classes.blockquote}
      >
        — Ну что,- говорит,- медведь тебе на ухо говорил?
      </Box>
      — А он сказал мне, что плохие люди те, которые в опасности от товарищей убегают.
      <Box
        component='blockquote'
        className={classes.blockquote}
      >
        что плохие люди те, которые в опасности от товарищей убегают.
      </Box>
    </Box>
  )
}

