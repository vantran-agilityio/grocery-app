import { memo } from 'react';
import { FlatList, Platform } from 'react-native';

// Components
import Item from './Item';

// Models
import type { Product } from '@repo/models';

// Utils
import { areEqual } from '@repo/utils';

// Styles
import styles from './styles';

interface IProps {
  products: Product[];
  onNavigateToDetails: (id: number) => void;
}

const HorizontalCards = ({ products, onNavigateToDetails }: IProps) => (
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
        onNavigateToDetails={() => onNavigateToDetails(id)}
      />
    )}
    keyExtractor={({ id }) => id.toString()}
    horizontal={false}
    numColumns={Platform.select({ native: 2, web: 5 })}
    columnWrapperStyle={styles.row}
    contentContainerStyle={styles.container}
  />
);

export default memo(HorizontalCards, areEqual);
