import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Button_TypeLoginType2SocialTyp3.module.css';
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
    continueWithApple?: boolean;
  };
}
/* @figmaId 39:3469 */
export const Button_TypeLoginType2SocialTyp3: FC<Props> = memo(function Button_TypeLoginType2SocialTyp3(props = {}) {
  return (
    <button
      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    >
      <div className={classes.autoLayoutHorizontal}>
        <div className={classes.frame}>{props.swap?.frame || <FrameIcon className={classes.icon} />}</div>
        {!props.hide?.continueWithApple && <div className={classes.continueWithApple}>Continue with Apple</div>}
      </div>
    </button>
  );
});
