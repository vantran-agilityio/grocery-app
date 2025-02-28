import { memo } from 'react';
import { FlatList } from 'react-native';

// Components
import Item from './Item';
import SwipeToDelete from '@components/SwipeToDelete';

// Utils
import { areEqual } from '@repo/utils';

// Styles
import styles from './styles';

interface IProps {
  cartItemIds: number[];
}

const VerticalCard = ({ cartItemIds }: IProps) => (
  <FlatList
    data={cartItemIds}
    renderItem={({ item: cartItemId }) => (
      <SwipeToDelete cartItemId={cartItemId}>
        <Item cartItemId={cartItemId} />
      </SwipeToDelete>
    )}
    keyExtractor={(productId) => productId.toString()}
    horizontal={false}
    numColumns={1}
    contentContainerStyle={styles.container}
  />
);

export default memo(VerticalCard, areEqual);
