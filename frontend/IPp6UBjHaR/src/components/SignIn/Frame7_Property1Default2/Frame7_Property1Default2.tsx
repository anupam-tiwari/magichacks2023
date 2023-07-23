import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Input_StatusFillTypeDefaultSta } from '../Input_StatusFillTypeDefaultSta/Input_StatusFillTypeDefaultSta';
import classes from './Frame7_Property1Default2.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    label?: ReactNode;
  };
}
/* @figmaId 39:3221 */
export const Frame7_Property1Default2: FC<Props> = memo(function Frame7_Property1Default2(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame8}>
        {props.text?.label != null ? props.text?.label : <div className={classes.label}>Lorem Ipsum</div>}
      </div>
      <Input_StatusFillTypeDefaultSta />
    </div>
  );
});
