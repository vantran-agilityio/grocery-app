import { ReactNode, useCallback } from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

// Components

// Hooks
import { useCartItemDelete } from '@repo/hooks';

// Styles
import styles from './styles';
import { DeleteIcon } from '@repo/ui';
import { useStore } from '@repo/stores';

interface IProps {
  cartItemId: number;
  children: ReactNode;
}

const SwipeToDelete: React.FC<IProps> = ({ children, cartItemId }: IProps) => {
  const userId = useStore((state) => state.userId);
  const { mutateAsync: deleteCartItem } = useCartItemDelete(userId);

  const renderRightActions = (
    onPress: (event: GestureResponderEvent) => void
  ) => {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <DeleteIcon />
      </TouchableOpacity>
    );
  };

  const handleDelete = useCallback(() => {
    deleteCartItem(cartItemId);
  }, [cartItemId]);

  return (
    <GestureHandlerRootView style={styles.container}>
      <Swipeable renderRightActions={() => renderRightActions(handleDelete)}>
        {children}
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default SwipeToDelete;
