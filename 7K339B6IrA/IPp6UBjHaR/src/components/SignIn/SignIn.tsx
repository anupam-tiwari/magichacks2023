import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button_TypeLoginType2SocialTyp2 } from './Button_TypeLoginType2SocialTyp2/Button_TypeLoginType2SocialTyp2';
import { Button_TypeLoginType2SocialTyp3 } from './Button_TypeLoginType2SocialTyp3/Button_TypeLoginType2SocialTyp3';
import { Button_TypeLoginType2SocialTyp } from './Button_TypeLoginType2SocialTyp/Button_TypeLoginType2SocialTyp';
import { CarVuvietducComIcon } from './CarVuvietducComIcon.js';
import { Frame7_Property1Default } from './Frame7_Property1Default/Frame7_Property1Default';
import { Frame8_Property1Default } from './Frame8_Property1Default/Frame8_Property1Default';
import { FrameIcon2 } from './FrameIcon2.js';
import { FrameIcon3 } from './FrameIcon3.js';
import { FrameIcon } from './FrameIcon.js';
import classes from './SignIn.module.css';
import { StatusBarIcon } from './StatusBarIcon.js';

interface Props {
  className?: string;
  hide?: {
    continueWithFacebook?: boolean;
    continueWithGoogle?: boolean;
    continueWithApple?: boolean;
  };
}
/* @figmaId 39:2790 */
export const SignIn: FC<Props> = memo(function SignIn(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle61}></div>
      <div className={classes.signInToYourAccount}>Sign in to your account</div>
      <div className={classes.orContinueWith}>or continue with</div>
      <Button_TypeLoginType2SocialTyp
        className={classes.typeLoginType2SocialType3Faceb}
        swap={{
          frame: <FrameIcon className={classes.icon} />,
        }}
        hide={{
          continueWithFacebook: true,
        }}
      />
      <Button_TypeLoginType2SocialTyp2
        className={classes.typeLoginType2SocialType3Googl}
        swap={{
          frame: <FrameIcon2 className={classes.icon2} />,
        }}
        hide={{
          continueWithGoogle: true,
        }}
      />
      <Button_TypeLoginType2SocialTyp3
        className={classes.typeLoginType2SocialType3Apple}
        swap={{
          frame: <FrameIcon3 className={classes.icon3} />,
        }}
        hide={{
          continueWithApple: true,
        }}
      />
      <div className={classes.donTHaveAnAccountSignUpHere}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>Don’t have an account? </span>
          <span className={classes.label2}>Sign up here</span>
        </p>
      </div>
      <div className={classes.rectangle7}></div>
      <div className={classes.signIn}>Sign In</div>
      <div className={classes.carVuvietducCom}>
        <CarVuvietducComIcon className={classes.icon4} />
      </div>
      <Frame7_Property1Default className={classes.frame7} />
      <Frame8_Property1Default className={classes.frame8} />
      <div className={classes.homeIndicator}></div>
      <div className={classes.dynamicIsland}></div>
      <div className={classes.statusBar}>
        <StatusBarIcon className={classes.icon5} />
      </div>
    </div>
  );
});
