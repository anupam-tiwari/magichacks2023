import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Ellipse100Icon } from './Ellipse100Icon.js';
import { Ellipse101Icon } from './Ellipse101Icon.js';
import { Frame2_Property1Variant2 } from './Frame2_Property1Variant2/Frame2_Property1Variant2';
import classes from './Homepage.module.css';
import { MdiLocationIcon } from './MdiLocationIcon.js';
import { NavBar } from './NavBar/NavBar';
import { Notification_Property1LinearPr } from './Notification_Property1LinearPr/Notification_Property1LinearPr';
import { StatusBarIcon } from './StatusBarIcon.js';
import { VectorIcon } from './VectorIcon.js';
import { VuesaxLinearNotificationIcon } from './VuesaxLinearNotificationIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 39:2312 */
export const Homepage: FC<Props> = memo(function Homepage(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <NavBar
        className={classes.navBar}
        swap={{
          frame2: <Frame2_Property1Variant2 className={classes.frame2} />,
        }}
      />
      <div className={classes.goodMorningAnna}>Good Morning, Anna</div>
      <div className={classes.recentRides}>Recent Rides</div>
      <div className={classes.rectangle44}></div>
      <div className={classes.destination}>Destination</div>
      <div className={classes.driver}>Driver</div>
      <div className={classes.disneyland}>Disneyland</div>
      <div className={classes.stacyS}>Stacy S.</div>
      <div className={classes.ellipse100}>
        <Ellipse100Icon className={classes.icon2} />
      </div>
      <div className={classes.frame767}>
        <div className={classes.rectangle59}></div>
        <div className={classes.frame766}>
          <div className={classes.ridesGiven}>Rides Given</div>
          <div className={classes._6}>6</div>
        </div>
      </div>
      <div className={classes.frame768}>
        <div className={classes.frame770}>
          <div className={classes.rectangle592}></div>
        </div>
        <div className={classes.group34}>
          <div className={classes._2452Mi}>2452 mi</div>
          <div className={classes.frame7662}>
            <div className={classes.frame769}>
              <div className={classes.milesDriven}>Miles Driven</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.rectangle60}></div>
      <div className={classes.myCar}>My Car</div>
      <div className={classes.unsplashP7tai9P7HS}></div>
      <Notification_Property1LinearPr
        className={classes.notification}
        classes={{ vuesaxLinearNotification: classes.vuesaxLinearNotification }}
        swap={{
          vuesaxLinearNotification: (
            <div className={classes.vuesaxLinearNotification}>
              <VuesaxLinearNotificationIcon className={classes.icon} />
            </div>
          ),
        }}
      />
      <div className={classes.ellipse101}>
        <Ellipse101Icon className={classes.icon3} />
      </div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon4} />
      </div>
      <div className={classes.frame771}>
        <div className={classes.mdiLocation}>
          <MdiLocationIcon className={classes.icon5} />
        </div>
        <div className={classes.losAngelesCA}>Los Angeles, CA</div>
      </div>
      <div className={classes.homeIndicator}></div>
      <div className={classes.dynamicIsland}></div>
      <div className={classes.statusBar}>
        <StatusBarIcon className={classes.icon6} />
      </div>
    </div>
  );
});
