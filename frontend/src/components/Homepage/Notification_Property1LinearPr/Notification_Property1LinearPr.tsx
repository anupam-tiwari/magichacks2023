import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Notification_Property1LinearPr.module.css';
import { VuesaxLinearNotificationIcon } from './VuesaxLinearNotificationIcon.js';

interface Props {
  className?: string;
  classes?: {
    vuesaxLinearNotification?: string;
    root?: string;
  };
  swap?: {
    vuesaxLinearNotification?: ReactNode;
  };
}
/* @figmaId 39:2704 */
export const Notification_Property1LinearPr: FC<Props> = memo(function Notification_Property1LinearPr(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.vuesaxLinearNotification || ''} ${classes.vuesaxLinearNotification}`}>
        {props.swap?.vuesaxLinearNotification || <VuesaxLinearNotificationIcon className={classes.icon} />}
      </div>
    </div>
  );
});
