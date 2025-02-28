import { Platform, StyleSheet } from 'react-native';

// Themes
import {
  variantStyle,
  fontWeightStyleMobile,
  fontWeightStyleWeb,
} from '@themes';

const fontWeightStyle = Platform.select({
  web: fontWeightStyleWeb,
  default: fontWeightStyleMobile,
});

const styles = StyleSheet.create({ ...variantStyle, ...fontWeightStyle });

export default styles;
