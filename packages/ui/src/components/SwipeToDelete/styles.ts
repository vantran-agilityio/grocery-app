import { StyleSheet } from 'react-native';
import { colors } from '@themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.red,
    justifyContent: 'center',
    marginLeft: 5,
    width: 75,
  },
});

export default styles;
