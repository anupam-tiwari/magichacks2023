import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ProfileCircle_Property1Linear.module.css';
import { VuesaxLinearProfileCircleIcon } from './VuesaxLinearProfileCircleIcon.js';

interface Props {
  className?: string;
  classes?: {
    vuesaxLinearProfileCircle?: string;
    root?: string;
  };
  swap?: {
    vuesaxLinearProfileCircle?: ReactNode;
  };
}
/* @figmaId 15:188 */
export const ProfileCircle_Property1Linear: FC<Props> = memo(function ProfileCircle_Property1Linear(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.vuesaxLinearProfileCircle || ''} ${classes.vuesaxLinearProfileCircle}`}>
        {props.swap?.vuesaxLinearProfileCircle || <VuesaxLinearProfileCircleIcon className={classes.icon} />}
      </div>
    </div>
  );
});
