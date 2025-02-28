import { StyleSheet } from 'react-native';
import { colors } from '@themes';

const styles = StyleSheet.create({
  container: {
    rowGap: 20,
  },
  inputWrapper: {
    rowGap: 5,
  },
  optionWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rememberMe: {
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: 10,
  },
  forgotPassword: {
    color: colors.link,
  },
});

export default styles;
