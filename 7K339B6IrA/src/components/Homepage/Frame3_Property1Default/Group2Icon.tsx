import { memo, SVGProps } from 'react';

const Group2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 31 29' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M13.5 26C20.6797 26 26.5 20.1797 26.5 13C26.5 5.8203 20.6797 0 13.5 0C6.3203 0 0.5 5.8203 0.5 13C0.5 20.1797 6.3203 26 13.5 26Z'
      stroke='#7FD18C'
      strokeWidth={3}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M30.5 29L23.5 22' stroke='#7FD18C' strokeWidth={3} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(Group2Icon);
export { Memo as Group2Icon };
