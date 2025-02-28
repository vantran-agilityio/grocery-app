import { memo } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const EmailIcon = (props: SvgProps) => (
  <Svg width={23} height={19} fill="none" {...props}>
    <Path
      fill="#868889"
      d="M20.979.523H2.02A2.025 2.025 0 0 0 0 2.545V16.02c0 1.111.904 2.022 2.021 2.022h18.957c1.111 0 2.022-.904 2.022-2.021V2.544c0-1.11-.904-2.022-2.021-2.022Zm-.28 1.348-9.156 9.157L2.307 1.87H20.7ZM1.348 15.742V2.818l6.49 6.434-6.49 6.49Zm.953.953 6.494-6.494 2.275 2.256c.264.261.69.26.951-.002l2.22-2.219 6.458 6.46H2.301Zm19.351-.953-6.459-6.459 6.46-6.459v12.918Z"
    />
  </Svg>
);

export default memo(EmailIcon);
