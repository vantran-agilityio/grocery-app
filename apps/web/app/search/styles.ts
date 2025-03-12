import { StyleSheet } from 'react-native';
import { colors } from '@repo/ui';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.primary,
    flex: 1,
    rowGap: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    columnGap: 10,
  },
  resultArea: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
});

export default styles;
