import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Input_StatusFillTypeDefaultSta.module.css';

interface Props {
  className?: string;
}
/* @figmaId 39:3214 */
export const Input_StatusFillTypeDefaultSta: FC<Props> = memo(function Input_StatusFillTypeDefaultSta(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.label}>Lorem Ipsum</div>
    </div>
  );
});
