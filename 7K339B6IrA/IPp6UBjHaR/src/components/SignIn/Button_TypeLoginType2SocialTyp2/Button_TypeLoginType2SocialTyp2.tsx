import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button_TypeLoginType2SocialTyp2.module.css';
import { FrameIcon } from './FrameIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    frame?: ReactNode;
  };
  hide?: {
    continueWithGoogle?: boolean;
  };
}
/* @figmaId 39:3483 */
export const Button_TypeLoginType2SocialTyp2: FC<Props> = memo(function Button_TypeLoginType2SocialTyp2(props = {}) {
  return (
    <button
      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    >
      <div className={classes.autoLayoutHorizontal}>
        <div className={classes.frame}>{props.swap?.frame || <FrameIcon className={classes.icon} />}</div>
        {!props.hide?.continueWithGoogle && <div className={classes.continueWithGoogle}>Continue with Google</div>}
      </div>
    </button>
  );
});
