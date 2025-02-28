import { StyleSheet } from 'react-native';
import { colors } from '@themes';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: colors.background.dark,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 20,
    rowGap: 25,
    alignItems: 'center',
  },

  header: {
    rowGap: 5,
    alignSelf: 'flex-start',
  },
  price: {
    color: colors.text.dark,
  },
  description: {
    lineHeight: 18,
    width: '100%',
  },

  footer: {
    rowGap: 10,
    position: 'absolute',
    bottom: 40,
    width: '100%',
  },
  quantity: {
    alignItems: 'center',
    backgroundColor: colors.background.primary,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  quantityCount: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityItem: {
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityNumber: {
    borderColor: colors.border,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    paddingVertical: 10,
  },
});

export default styles;
