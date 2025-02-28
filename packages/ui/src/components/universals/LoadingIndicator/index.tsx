import { ActivityIndicator, View } from 'react-native';
import { colors } from '@themes';

// Styles
import styles from './styles';

const LoadingIndicator = () => (
  <View style={styles.container}>
    <ActivityIndicator
      size="small"
      color={colors.primary.main}
      testID="loading-indicator"
    />
  </View>
);

export default LoadingIndicator;
