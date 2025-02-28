import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    rowGap: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categories: {
    flexDirection: 'row',
    columnGap: 20,
  },

  itemContainer: {
    rowGap: 10,
    textAlign: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
});

export default styles;
