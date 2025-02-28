import { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const AddIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#6CC51D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6 12h12M12 18V6"
    />
  </Svg>
);
export default memo(AddIcon);
