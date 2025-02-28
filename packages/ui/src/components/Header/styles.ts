import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  backIconWrapper: {
    position: 'absolute',
    justifyContent: 'center',
  },
  backIcon: { left: 15 },
  title: {
    flex: 1,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
});

export default styles;
