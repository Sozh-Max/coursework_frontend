import React, { useRef } from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import useTheme from '@material-ui/core/styles/useTheme';

import { getStyles } from './styles';

const useStyles = makeStyles(getStyles);

export const HTML6 = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const goToAnchor = ref => window.scrollTo(0, ref.current.offsetTop)

  const elem1 = useRef(null);
  const elem2 = useRef(null);
  const elem3 = useRef(null);

  return (
    <Box>
      <Box className={classes.item}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate et urna sit amet varius. Nam blandit urna ex. Suspendisse quis
        <Box
          component='span'
          onClick={() => goToAnchor(elem1)}
          className={classes.anchor}>
          GO TO ANCHOR NUMBER 1
        </Box>
        vulputate dolor. Nulla nec nisi mattis, rutrum libero bibendum, vestibulum mi. Mauris sit amet mollis dolor, vitae laoreet mi. Nulla sit amet bibendum sem, eu porttitor leo. Fusce convallis tristique sem, et pretium nunc aliquam sed. Vivamus egestas mi at porttitor ultrices. Nulla quis ultricies lacus. Cras sollicitudin ante ex, dignissim cursus ante dictum sit amet. Suspendisse et consectetur urna. Morbi ut egestas sem, at eleifend odio. Suspendisse ut commodo felis. Nulla eleifend malesuada euismod. Sed scelerisque nulla sed nunc efficitur imperdiet.
      </Box>

      <Box className={classes.item}>
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur sed libero consectetur, bibendum eros vitae, lacinia mi. Nunc congue urna et porta pellentesque.
        <Box
          component='span'
          onClick={() => goToAnchor(elem2)}
          className={classes.anchor}>
          GO TO ANCHOR NUMBER 2
        </Box>
        Nam facilisis sodales libero. Duis urna urna, maximus a pellentesque at, congue suscipit nulla. Vivamus commodo in diam eget bibendum. Nunc commodo fringilla mi a bibendum. Curabitur facilisis sapien dolor, a bibendum eros porttitor quis. Donec consectetur hendrerit enim, eleifend posuere nulla tempor eu. Vivamus vel turpis et tellus finibus placerat ac sed justo. Nunc diam justo, luctus et ullamcorper sit amet, porttitor id libero. Quisque tempor egestas velit in facilisis. Vestibulum vel velit sed urna rutrum commodo.
      </Box>

      <Box className={classes.item}>
        Maecenas augue est, fringilla eget fermentum ut, vulputate aliquet ipsum. Donec finibus maximus turpis sed porta. Aliquam at cursus nunc.
        <Box
          component='span'
          onClick={() => goToAnchor(elem3)}
          className={classes.anchor}>
          GO TO ANCHOR NUMBER 3
        </Box> Ut pharetra metus sapien, molestie tristique enim sodales ac. Fusce consectetur enim eu felis lobortis, et elementum quam consequat. Curabitur at orci quis quam sodales volutpat ut posuere ipsum. Aliquam tincidunt quam posuere iaculis sagittis. Mauris enim felis, scelerisque vel massa sit amet, tempus aliquet nibh. Sed sodales ipsum luctus felis aliquet elementum id vel velit. Mauris porttitor in arcu eu auctor. Quisque ullamcorper lorem ac dapibus porta. Nunc sed augue enim. Sed vestibulum suscipit dapibus. Nulla vehicula iaculis odio, eget dapibus sapien eleifend ut. Donec volutpat libero sed placerat elementum.
      </Box>

      <Box className={classes.item}>
        Aliquam erat volutpat. Duis tincidunt dolor vel justo sagittis, non fringilla risus tincidunt. Morbi rutrum ut dolor ac maximus. Pellentesque tempor, lacus id lobortis efficitur, arcu elit rhoncus mauris, ut placerat ex orci ut arcu. Morbi condimentum a orci sed euismod. Nunc fringilla efficitur leo, sit amet iaculis sapien convallis a. Aenean fringilla ullamcorper enim nec dignissim. Fusce aliquam viverra orci, eget vestibulum metus ornare a. Duis sed mi a turpis pulvinar efficitur. Nulla quis accumsan neque.
      </Box>

      <Box className={classes.item}>
        Etiam interdum metus in molestie dapibus. Curabitur sed arcu id risus fringilla faucibus. Fusce ut rutrum nisi. Praesent eget erat placerat, pellentesque tortor sed, sagittis dui. Proin suscipit eleifend placerat. Quisque felis metus, tempus ut lobortis in, vulputate at arcu. Vivamus facilisis lorem dolor, et fermentum enim imperdiet in. Suspendisse ac mi luctus, interdum dolor placerat, auctor diam. Maecenas commodo luctus nulla in semper. Praesent egestas, neque quis viverra interdum, ex nunc interdum dolor, et fringilla ipsum ex sit amet eros. Sed laoreet felis ac volutpat laoreet.
      </Box>

      <Box className={classes.item}>
        Ut nibh ante, aliquam sit amet volutpat at, tristique tincidunt quam. Sed varius elit id urna aliquet auctor. Fusce tempor lacus sit amet urna scelerisque laoreet et in sapien. Morbi quis justo nisi. Nullam sed ipsum efficitur quam posuere malesuada. Morbi et elit congue, laoreet diam sed, scelerisque velit. Duis sed finibus elit. Aliquam eget mattis tortor, non placerat eros. Donec ac tellus justo.
      </Box>

      <Box className={classes.item}>
        Vestibulum vestibulum nisi sed erat pretium, non finibus mauris tempus. Morbi a molestie nisl, nec pharetra mauris. Nulla facilisi. Maecenas ultrices eu magna sodales blandit. Suspendisse in massa tincidunt, facilisis augue ut, luctus ex. Phasellus vel consectetur dolor, at ullamcorper tortor. Cras leo purus, posuere ut bibendum et, consequat ultrices dolor. Fusce euismod dolor in hendrerit posuere. Cras cursus at justo non bibendum. Fusce pharetra leo vel hendrerit aliquam. Nullam interdum, nunc et dictum semper, mi dolor semper mi, sit amet condimentum turpis leo vel neque. Nulla eu arcu id enim sagittis facilisis.
      </Box>

      <Box className={classes.item}>
        Ut justo sem, laoreet vitae fringilla et, finibus ut arcu. Fusce id ante ac orci consectetur aliquet. Maecenas a lectus sem. Cras ipsum dui, fermentum vel libero sit amet, placerat ullamcorper enim. Quisque sed ultrices velit, eget aliquet nisl. Vivamus quis ipsum est. Donec vitae nunc sit amet mi aliquam fringilla at nec lectus. Maecenas fermentum porttitor ligula, id ornare arcu pretium at. Vivamus elementum mi sapien, non dapibus purus euismod eget. Fusce augue tellus, finibus ut faucibus sit amet, vulputate vitae nibh.
      </Box>

      <Box className={classes.item}>
        Nullam eu maximus enim. Cras commodo metus tellus, consequat volutpat lacus egestas quis. Suspendisse vel pharetra magna. Nam euismod tortor enim, non suscipit enim vestibulum nec. Nullam ornare libero a hendrerit ullamcorper. Proin eleifend enim quis ipsum cursus, eget placerat elit tincidunt. Suspendisse metus nisi, tincidunt sed risus ac, tempus ultrices dui. Nulla ut urna et arcu ultricies viverra vel quis nisi.
      </Box>

      <Box className={classes.item}>
        Quisque fermentum dui quis congue accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin dictum nulla aliquet, faucibus turpis ut, consequat arcu. Sed lacinia volutpat magna porttitor mattis. Aenean semper eleifend tortor, non consequat purus fringilla vitae. Maecenas semper enim at augue rhoncus, sit amet auctor nibh pulvinar. Proin ac dictum libero, vitae pulvinar neque. Sed leo massa, condimentum et rhoncus vel, commodo non justo. Donec congue ipsum et ligula pulvinar, et placerat risus placerat. Nulla tempus at metus et bibendum. Quisque volutpat blandit massa. Phasellus auctor felis vel mauris fringilla efficitur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ornare commodo ante, vitae aliquet nunc semper at. Aenean dapibus semper vestibulum.
      </Box>

        <Box className={classes.item}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate et urna sit amet varius. Nam blandit urna ex. Suspendisse quis vulputate dolor. Nulla nec nisi mattis, rutrum libero bibendum, vestibulum mi. Mauris sit amet mollis dolor, vitae laoreet mi. Nulla sit amet bibendum sem, eu porttitor leo. Fusce convallis tristique sem, et pretium nunc aliquam sed. Vivamus egestas mi at porttitor ultrices. Nulla quis ultricies lacus. Cras sollicitudin ante ex, dignissim cursus ante dictum sit amet. Suspendisse et consectetur urna. Morbi ut egestas sem, at eleifend odio. Suspendisse ut commodo felis. Nulla eleifend malesuada euismod. Sed scelerisque nulla sed nunc efficitur imperdiet.
        </Box>

        <Box className={classes.item}>
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur sed libero consectetur, bibendum eros vitae, lacinia mi. Nunc congue urna et porta pellentesque. Nam facilisis sodales libero. Duis urna urna, maximus a pellentesque at, congue suscipit nulla. Vivamus commodo in diam eget bibendum. Nunc commodo fringilla mi a bibendum. Curabitur facilisis sapien dolor, a bibendum eros porttitor quis. Donec consectetur hendrerit enim, eleifend posuere nulla tempor eu. Vivamus vel turpis et tellus finibus placerat ac sed justo. Nunc diam justo, luctus et ullamcorper sit amet, porttitor id libero. Quisque tempor egestas velit in facilisis. Vestibulum vel velit sed urna rutrum commodo.
        </Box>

        <Box className={classes.item}>
            Maecenas augue est, fringilla eget fermentum ut, vulputate aliquet ipsum. Donec finibus maximus turpis sed porta. Aliquam at cursus nunc. Ut pharetra metus sapien, molestie tristique enim sodales ac. Fusce consectetur enim eu felis lobortis, et elementum quam consequat. Curabitur at orci quis quam sodales volutpat ut posuere ipsum. Aliquam tincidunt quam posuere iaculis sagittis. Mauris enim felis, scelerisque vel massa sit amet, tempus aliquet nibh. Sed sodales ipsum luctus felis aliquet elementum id vel velit. Mauris porttitor in arcu eu auctor. Quisque ullamcorper lorem ac dapibus porta. Nunc sed augue enim. Sed vestibulum suscipit dapibus. Nulla vehicula iaculis odio, eget dapibus sapien eleifend ut. Donec volutpat libero sed placerat elementum.
        </Box>

        <Box className={classes.item}>
            Aliquam erat volutpat. Duis tincidunt dolor vel justo sagittis, non fringilla risus tincidunt. Morbi rutrum ut dolor ac maximus. Pellentesque tempor, lacus id lobortis efficitur, arcu elit rhoncus mauris, ut placerat ex orci ut arcu. Morbi condimentum a orci sed euismod. Nunc fringilla efficitur leo, sit amet iaculis sapien convallis a. Aenean fringilla ullamcorper enim nec dignissim. Fusce aliquam viverra orci, eget vestibulum metus ornare a. Duis sed mi a turpis pulvinar efficitur. Nulla quis accumsan neque.
        </Box>

        <Box className={classes.item}>
            Etiam interdum metus in molestie dapibus. Curabitur sed arcu id risus fringilla faucibus. Fusce ut rutrum nisi. Praesent eget erat placerat, pellentesque tortor sed, sagittis dui. Proin suscipit eleifend placerat. Quisque felis metus, tempus ut lobortis in, vulputate at arcu. Vivamus facilisis lorem dolor, et fermentum enim imperdiet in. Suspendisse ac mi luctus, interdum dolor placerat, auctor diam. Maecenas commodo luctus nulla in semper. Praesent egestas, neque quis viverra interdum, ex nunc interdum dolor, et fringilla ipsum ex sit amet eros. Sed laoreet felis ac volutpat laoreet.
        </Box>

        <Box
          className={classes.item}
          ref={elem3}
        >
          ANCHOR 3
        </Box>

        <Box className={classes.item}>
          Ut nibh ante, aliquam sit amet volutpat at, tristique tincidunt quam. Sed varius elit id urna aliquet auctor. Fusce tempor lacus sit amet urna scelerisque laoreet et in sapien. Morbi quis justo nisi. Nullam sed ipsum efficitur quam posuere malesuada. Morbi et elit congue, laoreet diam sed, scelerisque velit. Duis sed finibus elit. Aliquam eget mattis tortor, non placerat eros. Donec ac tellus justo.
        </Box>

      <Box
        className={classes.item}
        ref={elem2}
      >
        ANCHOR 2
      </Box>

        <Box className={classes.item}>
            Vestibulum vestibulum nisi sed erat pretium, non finibus mauris tempus. Morbi a molestie nisl, nec pharetra mauris. Nulla facilisi. Maecenas ultrices eu magna sodales blandit. Suspendisse in massa tincidunt, facilisis augue ut, luctus ex. Phasellus vel consectetur dolor, at ullamcorper tortor. Cras leo purus, posuere ut bibendum et, consequat ultrices dolor. Fusce euismod dolor in hendrerit posuere. Cras cursus at justo non bibendum. Fusce pharetra leo vel hendrerit aliquam. Nullam interdum, nunc et dictum semper, mi dolor semper mi, sit amet condimentum turpis leo vel neque. Nulla eu arcu id enim sagittis facilisis.
        </Box>

        <Box className={classes.item}>
            Ut justo sem, laoreet vitae fringilla et, finibus ut arcu. Fusce id ante ac orci consectetur aliquet. Maecenas a lectus sem. Cras ipsum dui, fermentum vel libero sit amet, placerat ullamcorper enim. Quisque sed ultrices velit, eget aliquet nisl. Vivamus quis ipsum est. Donec vitae nunc sit amet mi aliquam fringilla at nec lectus. Maecenas fermentum porttitor ligula, id ornare arcu pretium at. Vivamus elementum mi sapien, non dapibus purus euismod eget. Fusce augue tellus, finibus ut faucibus sit amet, vulputate vitae nibh.
        </Box>

        <Box className={classes.item}>
            Nullam eu maximus enim. Cras commodo metus tellus, consequat volutpat lacus egestas quis. Suspendisse vel pharetra magna. Nam euismod tortor enim, non suscipit enim vestibulum nec. Nullam ornare libero a hendrerit ullamcorper. Proin eleifend enim quis ipsum cursus, eget placerat elit tincidunt. Suspendisse metus nisi, tincidunt sed risus ac, tempus ultrices dui. Nulla ut urna et arcu ultricies viverra vel quis nisi.
        </Box>

        <Box className={classes.item}>
            Quisque fermentum dui quis congue accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin dictum nulla aliquet, faucibus turpis ut, consequat arcu. Sed lacinia volutpat magna porttitor mattis. Aenean semper eleifend tortor, non consequat purus fringilla vitae. Maecenas semper enim at augue rhoncus, sit amet auctor nibh pulvinar. Proin ac dictum libero, vitae pulvinar neque. Sed leo massa, condimentum et rhoncus vel, commodo non justo. Donec congue ipsum et ligula pulvinar, et placerat risus placerat. Nulla tempus at metus et bibendum. Quisque volutpat blandit massa. Phasellus auctor felis vel mauris fringilla efficitur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ornare commodo ante, vitae aliquet nunc semper at. Aenean dapibus semper vestibulum.
        </Box>

      <Box className={classes.item}>
        Quisque fermentum dui quis congue accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin dictum nulla aliquet, faucibus turpis ut, consequat arcu. Sed lacinia volutpat magna porttitor mattis. Aenean semper eleifend tortor, non consequat purus fringilla vitae. Maecenas semper enim at augue rhoncus, sit amet auctor nibh pulvinar. Proin ac dictum libero, vitae pulvinar neque. Sed leo massa, condimentum et rhoncus vel, commodo non justo. Donec congue ipsum et ligula pulvinar, et placerat risus placerat. Nulla tempus at metus et bibendum. Quisque volutpat blandit massa. Phasellus auctor felis vel mauris fringilla efficitur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ornare commodo ante, vitae aliquet nunc semper at. Aenean dapibus semper vestibulum.
      </Box>

      <Box className={classes.item}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate et urna sit amet varius. Nam blandit urna ex. Suspendisse quis vulputate dolor. Nulla nec nisi mattis, rutrum libero bibendum, vestibulum mi. Mauris sit amet mollis dolor, vitae laoreet mi. Nulla sit amet bibendum sem, eu porttitor leo. Fusce convallis tristique sem, et pretium nunc aliquam sed. Vivamus egestas mi at porttitor ultrices. Nulla quis ultricies lacus. Cras sollicitudin ante ex, dignissim cursus ante dictum sit amet. Suspendisse et consectetur urna. Morbi ut egestas sem, at eleifend odio. Suspendisse ut commodo felis. Nulla eleifend malesuada euismod. Sed scelerisque nulla sed nunc efficitur imperdiet.
      </Box>

      <Box className={classes.item}>
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur sed libero consectetur, bibendum eros vitae, lacinia mi. Nunc congue urna et porta pellentesque. Nam facilisis sodales libero. Duis urna urna, maximus a pellentesque at, congue suscipit nulla. Vivamus commodo in diam eget bibendum. Nunc commodo fringilla mi a bibendum. Curabitur facilisis sapien dolor, a bibendum eros porttitor quis. Donec consectetur hendrerit enim, eleifend posuere nulla tempor eu. Vivamus vel turpis et tellus finibus placerat ac sed justo. Nunc diam justo, luctus et ullamcorper sit amet, porttitor id libero. Quisque tempor egestas velit in facilisis. Vestibulum vel velit sed urna rutrum commodo.
      </Box>

      <Box className={classes.item}>
        Maecenas augue est, fringilla eget fermentum ut, vulputate aliquet ipsum. Donec finibus maximus turpis sed porta. Aliquam at cursus nunc. Ut pharetra metus sapien, molestie tristique enim sodales ac. Fusce consectetur enim eu felis lobortis, et elementum quam consequat. Curabitur at orci quis quam sodales volutpat ut posuere ipsum. Aliquam tincidunt quam posuere iaculis sagittis. Mauris enim felis, scelerisque vel massa sit amet, tempus aliquet nibh. Sed sodales ipsum luctus felis aliquet elementum id vel velit. Mauris porttitor in arcu eu auctor. Quisque ullamcorper lorem ac dapibus porta. Nunc sed augue enim. Sed vestibulum suscipit dapibus. Nulla vehicula iaculis odio, eget dapibus sapien eleifend ut. Donec volutpat libero sed placerat elementum.
      </Box>

      <Box className={classes.item}>
        Aliquam erat volutpat. Duis tincidunt dolor vel justo sagittis, non fringilla risus tincidunt. Morbi rutrum ut dolor ac maximus. Pellentesque tempor, lacus id lobortis efficitur, arcu elit rhoncus mauris, ut placerat ex orci ut arcu. Morbi condimentum a orci sed euismod. Nunc fringilla efficitur leo, sit amet iaculis sapien convallis a. Aenean fringilla ullamcorper enim nec dignissim. Fusce aliquam viverra orci, eget vestibulum metus ornare a. Duis sed mi a turpis pulvinar efficitur. Nulla quis accumsan neque.
      </Box>

      <Box className={classes.item}>
        Etiam interdum metus in molestie dapibus. Curabitur sed arcu id risus fringilla faucibus. Fusce ut rutrum nisi. Praesent eget erat placerat, pellentesque tortor sed, sagittis dui. Proin suscipit eleifend placerat. Quisque felis metus, tempus ut lobortis in, vulputate at arcu. Vivamus facilisis lorem dolor, et fermentum enim imperdiet in. Suspendisse ac mi luctus, interdum dolor placerat, auctor diam. Maecenas commodo luctus nulla in semper. Praesent egestas, neque quis viverra interdum, ex nunc interdum dolor, et fringilla ipsum ex sit amet eros. Sed laoreet felis ac volutpat laoreet.
      </Box>

      <Box
        className={classes.item}
        ref={elem1}
      >
        ANCHOR 1
      </Box>

      <Box className={classes.item}>
        Ut nibh ante, aliquam sit amet volutpat at, tristique tincidunt quam. Sed varius elit id urna aliquet auctor. Fusce tempor lacus sit amet urna scelerisque laoreet et in sapien. Morbi quis justo nisi. Nullam sed ipsum efficitur quam posuere malesuada. Morbi et elit congue, laoreet diam sed, scelerisque velit. Duis sed finibus elit. Aliquam eget mattis tortor, non placerat eros. Donec ac tellus justo.
      </Box>

      <Box className={classes.item}>
        Quisque fermentum dui quis congue accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin dictum nulla aliquet, faucibus turpis ut, consequat arcu. Sed lacinia volutpat magna porttitor mattis. Aenean semper eleifend tortor, non consequat purus fringilla vitae. Maecenas semper enim at augue rhoncus, sit amet auctor nibh pulvinar. Proin ac dictum libero, vitae pulvinar neque. Sed leo massa, condimentum et rhoncus vel, commodo non justo. Donec congue ipsum et ligula pulvinar, et placerat risus placerat. Nulla tempus at metus et bibendum. Quisque volutpat blandit massa. Phasellus auctor felis vel mauris fringilla efficitur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ornare commodo ante, vitae aliquet nunc semper at. Aenean dapibus semper vestibulum.
      </Box>

      <Box className={classes.item}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate et urna sit amet varius. Nam blandit urna ex. Suspendisse quis vulputate dolor. Nulla nec nisi mattis, rutrum libero bibendum, vestibulum mi. Mauris sit amet mollis dolor, vitae laoreet mi. Nulla sit amet bibendum sem, eu porttitor leo. Fusce convallis tristique sem, et pretium nunc aliquam sed. Vivamus egestas mi at porttitor ultrices. Nulla quis ultricies lacus. Cras sollicitudin ante ex, dignissim cursus ante dictum sit amet. Suspendisse et consectetur urna. Morbi ut egestas sem, at eleifend odio. Suspendisse ut commodo felis. Nulla eleifend malesuada euismod. Sed scelerisque nulla sed nunc efficitur imperdiet.
      </Box>

      <Box className={classes.item}>
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur sed libero consectetur, bibendum eros vitae, lacinia mi. Nunc congue urna et porta pellentesque. Nam facilisis sodales libero. Duis urna urna, maximus a pellentesque at, congue suscipit nulla. Vivamus commodo in diam eget bibendum. Nunc commodo fringilla mi a bibendum. Curabitur facilisis sapien dolor, a bibendum eros porttitor quis. Donec consectetur hendrerit enim, eleifend posuere nulla tempor eu. Vivamus vel turpis et tellus finibus placerat ac sed justo. Nunc diam justo, luctus et ullamcorper sit amet, porttitor id libero. Quisque tempor egestas velit in facilisis. Vestibulum vel velit sed urna rutrum commodo.
      </Box>

      <Box className={classes.item}>
        Maecenas augue est, fringilla eget fermentum ut, vulputate aliquet ipsum. Donec finibus maximus turpis sed porta. Aliquam at cursus nunc. Ut pharetra metus sapien, molestie tristique enim sodales ac. Fusce consectetur enim eu felis lobortis, et elementum quam consequat. Curabitur at orci quis quam sodales volutpat ut posuere ipsum. Aliquam tincidunt quam posuere iaculis sagittis. Mauris enim felis, scelerisque vel massa sit amet, tempus aliquet nibh. Sed sodales ipsum luctus felis aliquet elementum id vel velit. Mauris porttitor in arcu eu auctor. Quisque ullamcorper lorem ac dapibus porta. Nunc sed augue enim. Sed vestibulum suscipit dapibus. Nulla vehicula iaculis odio, eget dapibus sapien eleifend ut. Donec volutpat libero sed placerat elementum.
      </Box>

      <Box className={classes.item}>
        Aliquam erat volutpat. Duis tincidunt dolor vel justo sagittis, non fringilla risus tincidunt. Morbi rutrum ut dolor ac maximus. Pellentesque tempor, lacus id lobortis efficitur, arcu elit rhoncus mauris, ut placerat ex orci ut arcu. Morbi condimentum a orci sed euismod. Nunc fringilla efficitur leo, sit amet iaculis sapien convallis a. Aenean fringilla ullamcorper enim nec dignissim. Fusce aliquam viverra orci, eget vestibulum metus ornare a. Duis sed mi a turpis pulvinar efficitur. Nulla quis accumsan neque.
      </Box>

      <Box className={classes.item}>
        Etiam interdum metus in molestie dapibus. Curabitur sed arcu id risus fringilla faucibus. Fusce ut rutrum nisi. Praesent eget erat placerat, pellentesque tortor sed, sagittis dui. Proin suscipit eleifend placerat. Quisque felis metus, tempus ut lobortis in, vulputate at arcu. Vivamus facilisis lorem dolor, et fermentum enim imperdiet in. Suspendisse ac mi luctus, interdum dolor placerat, auctor diam. Maecenas commodo luctus nulla in semper. Praesent egestas, neque quis viverra interdum, ex nunc interdum dolor, et fringilla ipsum ex sit amet eros. Sed laoreet felis ac volutpat laoreet.
      </Box>

      <Box className={classes.item}>
        Ut nibh ante, aliquam sit amet volutpat at, tristique tincidunt quam. Sed varius elit id urna aliquet auctor. Fusce tempor lacus sit amet urna scelerisque laoreet et in sapien. Morbi quis justo nisi. Nullam sed ipsum efficitur quam posuere malesuada. Morbi et elit congue, laoreet diam sed, scelerisque velit. Duis sed finibus elit. Aliquam eget mattis tortor, non placerat eros. Donec ac tellus justo.
      </Box>
    </Box>
  )
}

