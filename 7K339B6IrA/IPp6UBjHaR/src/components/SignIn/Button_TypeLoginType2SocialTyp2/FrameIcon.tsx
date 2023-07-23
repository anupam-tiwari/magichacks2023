import { memo, SVGProps } from 'react';

const FrameIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_91_1878)'>
      <path
        d='M23.0279 12.2245C23.0279 11.2412 22.9495 10.5237 22.7798 9.77963H11.7495V14.2176H18.2241C18.0936 15.3205 17.3887 16.9815 15.8222 18.0975L15.8003 18.2461L19.2878 20.9963L19.5295 21.0209C21.7486 18.9347 23.0279 15.8653 23.0279 12.2245'
        fill='#4285F4'
      />
      <path
        d='M11.7495 23.9176C14.9215 23.9176 17.5844 22.8545 19.5295 21.0209L15.8222 18.0976C14.8302 18.8018 13.4987 19.2934 11.7495 19.2934C8.64275 19.2934 6.00593 17.2074 5.06597 14.324L4.9282 14.3359L1.30175 17.1927L1.25432 17.3269C3.18624 21.2334 7.15457 23.9176 11.7495 23.9176Z'
        fill='#34A853'
      />
      <path
        d='M5.0661 14.324C4.81809 13.5799 4.67455 12.7826 4.67455 11.9588C4.67455 11.1349 4.81809 10.3377 5.05305 9.59358L5.04648 9.4351L1.37459 6.53239L1.25446 6.59055C0.458218 8.21165 0.00133493 10.0321 0.00133493 11.9588C0.00133493 13.8855 0.458218 15.7058 1.25446 17.3269L5.0661 14.324'
        fill='#FBBC05'
      />
      <path
        d='M11.7495 4.62405C13.9555 4.62405 15.4436 5.59404 16.2921 6.40463L19.6077 3.1093C17.5714 1.18262 14.9215 2.19727e-05 11.7495 2.19727e-05C7.15456 2.19727e-05 3.18624 2.68408 1.25432 6.59059L5.05292 9.59361C6.00592 6.71022 8.64274 4.62405 11.7495 4.62405'
        fill='#EB4335'
      />
    </g>
    <defs>
      <clipPath id='clip0_91_1878'>
        <rect width={23.04} height={24} fill='white' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(FrameIcon);
export { Memo as FrameIcon };