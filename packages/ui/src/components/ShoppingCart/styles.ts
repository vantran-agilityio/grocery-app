import { StyleSheet } from 'react-native';
import { colors } from '@themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.dark,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkout: {
    paddingHorizontal: 15,
    backgroundColor: colors.background.primary,
    width: '100%',
  },
  costItems: {
    rowGap: 5,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  costItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  costTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
});

export default styles;
