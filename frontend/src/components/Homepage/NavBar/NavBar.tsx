import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { Frame2_Property1Default } from '../Frame2_Property1Default/Frame2_Property1Default';
import { Frame3_Property1Default } from '../Frame3_Property1Default/Frame3_Property1Default';
import { Frame4_Property1Default } from '../Frame4_Property1Default/Frame4_Property1Default';
import { Frame5_Property1Default } from '../Frame5_Property1Default/Frame5_Property1Default';
import classes from './NavBar.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    frame2?: ReactNode;
  };
}
/* @figmaId 25:99 */
export const NavBar: FC<Props> = memo(function NavBar(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.swap?.frame2 || <Frame2_Property1Default className={classes.frame2} />}
      <Frame3_Property1Default className={classes.frame3} />
      <Frame4_Property1Default className={classes.frame4} />
      <Frame5_Property1Default className={classes.frame5} />
    </div>
  );
});
