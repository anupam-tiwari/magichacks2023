import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { ProfileCircle_Property1Linear } from '../ProfileCircle_Property1Linear/ProfileCircle_Property1Linear';
import classes from './Frame5_Property1Default.module.css';
import { VuesaxLinearProfileCircleIcon } from './VuesaxLinearProfileCircleIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 25:61 */
export const Frame5_Property1Default: FC<Props> = memo(function Frame5_Property1Default(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <ProfileCircle_Property1Linear
        className={classes.profileCircle}
        classes={{ vuesaxLinearProfileCircle: classes.vuesaxLinearProfileCircle }}
        swap={{
          vuesaxLinearProfileCircle: (
            <div className={classes.vuesaxLinearProfileCircle}>
              <VuesaxLinearProfileCircleIcon className={classes.icon} />
            </div>
          ),
        }}
      />
      <div className={classes.profile}>Profile</div>
    </div>
  );
});
