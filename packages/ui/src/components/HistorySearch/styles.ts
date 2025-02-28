import { StyleSheet } from 'react-native';
import { colors } from '@themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    rowGap: 15,
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  clear: {
    color: colors.link,
  },
  itemWrapper: {
    gap: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    backgroundColor: colors.background.primary,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
});

export default styles;
