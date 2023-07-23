import { memo, SVGProps } from 'react';

const Group1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 27 30' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 10.5L13.5 0L27 10.5V27C27 27.7956 26.6839 28.5587 26.1213 29.1213C25.5587 29.6839 24.7956 30 24 30H3C2.20435 30 1.44129 29.6839 0.87868 29.1213C0.31607 28.5587 0 27.7956 0 27V10.5Z'
      stroke='#7FD18C'
      strokeWidth={3}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M9 30V15H18V30' stroke='#7FD18C' strokeWidth={3} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(Group1Icon);
export { Memo as Group1Icon };
