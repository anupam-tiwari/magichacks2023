import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Frame2_Property1Variant2.module.css';
import { Group1Icon } from './Group1Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 25:20 */
export const Frame2_Property1Variant2: FC<Props> = memo(function Frame2_Property1Variant2(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.group1}>
        <Group1Icon className={classes.icon} />
      </div>
      <div className={classes.home}>Home</div>
    </div>
  );
});
