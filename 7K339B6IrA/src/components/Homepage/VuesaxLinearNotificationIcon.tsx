import { memo, SVGProps } from 'react';

const VuesaxLinearNotificationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 27 27' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M13.5225 3.27375C9.79875 3.27375 6.7725 6.3 6.7725 10.0238V13.275C6.7725 13.9613 6.48 15.0075 6.13125 15.5925L4.8375 17.7413C4.03875 19.0688 4.59 20.5425 6.0525 21.0375C10.9013 22.6575 16.1325 22.6575 20.9812 21.0375C22.3425 20.5875 22.9387 18.9788 22.1962 17.7413L20.9025 15.5925C20.565 15.0075 20.2725 13.9613 20.2725 13.275V10.0238C20.2725 6.31125 17.235 3.27375 13.5225 3.27375Z'
      stroke='#25424C'
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap='round'
    />
    <path
      d='M15.6038 3.6C15.255 3.49875 14.895 3.42 14.5237 3.375C13.4437 3.24 12.4087 3.31875 11.4412 3.6C11.7675 2.7675 12.5775 2.1825 13.5225 2.1825C14.4675 2.1825 15.2775 2.7675 15.6038 3.6Z'
      stroke='#25424C'
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M16.8975 21.4425C16.8975 23.2987 15.3788 24.8175 13.5225 24.8175C12.6 24.8175 11.745 24.435 11.1375 23.8275C10.53 23.22 10.1475 22.365 10.1475 21.4425'
      stroke='#25424C'
      strokeWidth={2}
      strokeMiterlimit={10}
    />
  </svg>
);
const Memo = memo(VuesaxLinearNotificationIcon);
export { Memo as VuesaxLinearNotificationIcon };
