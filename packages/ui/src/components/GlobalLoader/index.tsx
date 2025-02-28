import { memo } from 'react';
import { ActivityIndicator, View, useWindowDimensions } from 'react-native';

// Themes
import { colors } from '@themes';

// Styles
import styles from './styles';

const GlobalLoader = () => {
  const { width, height } = useWindowDimensions();

  return (
    <View style={[styles.container, { width, height }]} testID="global-loader">
      <ActivityIndicator
        size="large"
        color={colors.primary.dark}
        style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
      />
    </View>
  );
};

export default memo(GlobalLoader);
