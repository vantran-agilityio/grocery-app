import { StyleSheet } from 'react-native';
import { colors } from '@themes';

const styles = StyleSheet.create({
  container: {
    height: 283,
  },
  indicatorWrapper: {
    position: 'absolute',
    flexDirection: 'row',
    columnGap: 5,
    bottom: 30,
    left: 15,
  },
  indicator: {
    backgroundColor: colors.primary.light,
    borderRadius: 4,
    width: 8,
    height: 8,
  },

  bannerContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 45,
    paddingTop: 45,
    justifyContent: 'center',
  },
  text: { width: 175 },
});

export default styles;
