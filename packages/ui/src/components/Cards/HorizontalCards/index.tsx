import { memo } from 'react';
import { FlatList } from 'react-native';

// Components
import Item from './Item';

// Models
import { Product } from '@repo/models';

// Utils
import { areEqual } from '@repo/utils';

// Styles
import styles from './styles';

interface IProps {
  products: Product[];
}

const HorizontalCards = ({ products }: IProps) => (
  <FlatList
    scrollEnabled={false}
    nestedScrollEnabled
    data={products}
    renderItem={({
      item: { id, productUnitId, name, image: thumbnail, price },
    }) => (
      <Item
        id={id}
        productUnitId={productUnitId}
        name={name}
        image={thumbnail}
        price={price}
      />
    )}
    keyExtractor={({ id }) => id.toString()}
    horizontal={false}
    numColumns={2}
    columnWrapperStyle={styles.row}
    contentContainerStyle={styles.container}
  />
);

export default memo(HorizontalCards, areEqual);
