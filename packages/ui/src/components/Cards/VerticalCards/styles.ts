import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '@themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.dark,
    paddingTop: 20,
    rowGap: 15,
  },

  itemContainer: {
    alignItems: 'center',
    backgroundColor: colors.background.primary,
    flex: 1,
    flexDirection: 'row',
    width: Dimensions.get('window').width - 30, // screen width - 30
    justifyContent: 'space-between',
    padding: 15,
    columnGap: 20,
  },
  content: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1,
  },
  price: {
    color: colors.text.dark,
  },
  quantityWrapper: {
    alignItems: 'center',
    rowGap: 5,
  },

  imageWrapper: {
    backgroundColor: colors.primary.main,
    borderRadius: 84 / 2,
    width: 64,
    height: 64,
  },
  image: {
    width: 64,
    height: 64,
    objectFit: 'contain',
    transform: [{ scale: 1.2 }],
    marginTop: 10,
  },
});

export default styles;
