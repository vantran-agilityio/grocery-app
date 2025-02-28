import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';

const MinusIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#6CC51D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6 12h12"
    />
  </Svg>
);
export default memo(MinusIcon);
