import { StyleSheet } from 'react-native';
import { colors } from '@themes';

const styles = StyleSheet.create({
  container: { rowGap: 15 },
  form: { rowGap: 10 },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    backgroundColor: colors.background.primary,
    width: 55,
    height: 60,
    fontSize: 20,
    borderRadius: 5,
    textAlign: 'center',
  },
  helperContent: {
    alignItems: 'center',
  },
});

export default styles;
