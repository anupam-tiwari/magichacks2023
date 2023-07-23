import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Frame3_Property1Default.module.css';
import { Group2Icon } from './Group2Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 25:31 */
export const Frame3_Property1Default: FC<Props> = memo(function Frame3_Property1Default(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.group2}>
        <Group2Icon className={classes.icon} />
      </div>
      <div className={classes.book}>Book</div>
    </div>
  );
});
