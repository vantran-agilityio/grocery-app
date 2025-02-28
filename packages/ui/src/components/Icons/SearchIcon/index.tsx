import { memo } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SearchIcon = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fill="#868889"
      d="m18.506 17.328-4.438-4.437a7.879 7.879 0 0 0 1.765-4.973C15.833 3.553 12.281 0 7.917 0 3.552.001 0 3.553 0 7.918s3.552 7.916 7.917 7.916a7.879 7.879 0 0 0 4.973-1.765l4.437 4.438a.831.831 0 0 0 1.179 0 .832.832 0 0 0 0-1.179Zm-10.59-3.16a6.256 6.256 0 0 1-6.25-6.25 6.256 6.256 0 0 1 6.25-6.25 6.256 6.256 0 0 1 6.25 6.25 6.256 6.256 0 0 1-6.25 6.25Z"
    />
  </Svg>
);
export default memo(SearchIcon);
