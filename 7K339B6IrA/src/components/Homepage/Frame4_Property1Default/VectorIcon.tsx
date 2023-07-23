import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 30 29' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M29.5 13.6945C29.5055 15.8209 29.0087 17.9186 28.05 19.8167C26.9132 22.0912 25.1657 24.0042 23.0031 25.3416C20.8405 26.679 18.3483 27.3879 15.8055 27.3889C13.6791 27.3944 11.5814 26.8976 9.68332 25.9389L0.5 29L3.56111 19.8167C2.60239 17.9186 2.10556 15.8209 2.11111 13.6945C2.11209 11.1517 2.82098 8.65951 4.15837 6.49692C5.49577 4.33433 7.40884 2.58679 9.68332 1.45004C11.5814 0.491323 13.6791 -0.00549833 15.8055 4.58974e-05H16.6111C19.9692 0.18531 23.141 1.60271 25.5191 3.98087C27.8973 6.35902 29.3147 9.5308 29.5 12.8889V13.6945Z'
      stroke='#7FD18C'
      strokeWidth={3}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
