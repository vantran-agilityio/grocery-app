import { StyleSheet } from 'react-native';
import { colors } from '@themes';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.background.primary,
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.background.primary,
  },
  baseInput: {
    flex: 10,
    paddingVertical: 20,
    outlineStyle: 'none',
  },
  iconWrapper: { flex: 1, paddingHorizontal: 28 },
  error: {
    borderColor: colors.red,
  },
});

export default styles;
