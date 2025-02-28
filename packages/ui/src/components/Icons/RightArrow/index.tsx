import { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const RightArrow = (props: SvgProps) => (
  <Svg width={11} height={18} fill="none" {...props}>
    <Path
      fill="#868889"
      d="m10.3 9.57-9.008 8.21a.76.76 0 0 1-1.07 0 .75.75 0 0 1 0-1.066L8.686 9 .222 1.286a.75.75 0 0 1 0-1.065.76.76 0 0 1 1.07 0L10.3 8.429a.742.742 0 0 1 .215.57.748.748 0 0 1-.215.572Z"
    />
  </Svg>
);
export default memo(RightArrow);
