import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Frame7_Property1Default2 } from '../Frame7_Property1Default2/Frame7_Property1Default2';
import classes from './Frame7_Property1Default.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 39:3813 */
export const Frame7_Property1Default: FC<Props> = memo(function Frame7_Property1Default(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Frame7_Property1Default2
        className={classes.frame7}
        text={{
          label: <div className={classes.label}>Email</div>,
        }}
      />
    </div>
  );
});
