import { StyleSheet } from 'react-native';
import { colors } from '@themes';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.background.primary,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  baseTitle: {
    textAlign: 'center',
  },
  cartText: {
    paddingLeft: 10,
  },
  quantityWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  minus: {
    alignSelf: 'flex-start',
  },
  add: {
    alignSelf: 'flex-end',
  },

  container: {
    paddingVertical: 20,
  },

  row: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    columnGap: 20,
  },

  itemWrapper: {
    backgroundColor: colors.background.primary,
    flex: 0.5,
  },
  content: {
    alignItems: 'center',
  },
  price: {
    color: colors.text.dark,
    textAlign: 'center',
  },
  name: {
    textAlign: 'center',
    paddingVertical: 5,
  },
  amount: {
    textAlign: 'center',
  },
  top: {
    borderColor: colors.border,
    borderBottomWidth: 1,
    flex: 5,
    justifyContent: 'center',
    paddingBottom: 10,
    paddingTop: 30,
  },
  bottom: {
    flex: 1,
    justifyContent: 'center',
    height: 40,
  },
  circle: {
    backgroundColor: colors.primary.main,
    borderRadius: 84 / 2,
    width: 84,
    height: 84,
    position: 'absolute',
    top: -20,
  },
  image: {
    transform: [{ scale: 1.2 }],
    width: 84,
    height: 84,
    objectFit: 'contain',
  },
  favoriteIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
});

export default styles;
