import { StyleSheet } from 'react-native';
import { colors } from '@themes';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primary.dark,
    borderRadius: 5,
    flexDirection: 'row',
  },
  contentWrapper: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  baseTitle: {
    color: colors.text.light,
    textAlign: 'center',
  },
  iconWrapper: {
    position: 'absolute',
    top: 0,
    left: 30,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  disabledButton: {
    opacity: 0.5,
  },
});

export default styles;
