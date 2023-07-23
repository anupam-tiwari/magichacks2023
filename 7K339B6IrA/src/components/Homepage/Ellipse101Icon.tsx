import { memo, SVGProps } from 'react';

const Ellipse101Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={5} cy={5} r={5} fill='#9747FF' />
  </svg>
);
const Memo = memo(Ellipse101Icon);
export { Memo as Ellipse101Icon };
