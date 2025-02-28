import { useCallback, useEffect } from 'react';
import { Alert, View } from 'react-native';

// Components
import { LoadingIndicator, Typography } from '@components';
import { RightArrow } from '@components';
import HorizontalCards from '@components/Cards/HorizontalCards';

// Types
import { FontWeight, SizeType, TypoVariant } from '@interfaces';

// Constants
import { ALERT } from '@repo/constants';

// Hooks
import { useProductList } from '@repo/hooks';

// Stores
import { useStore } from '@repo/stores';

// Styles
import styles from './styles';

const FeaturedProducts = () => {
  const { data, isSuccess, isPending } = useProductList();

  // Stores
  const setProducts = useStore.use.setProducts();
  const products = useStore.use.products();

  useEffect(() => {
    if (isSuccess) {
      setProducts(data);
    }
  }, [isSuccess]);

  const handleAlertMessage = useCallback(() => {
    Alert.alert(ALERT.COMING_SOON);
  }, []);

  return (
    <>
      <View style={styles.titleWrapper}>
        <Typography
          variant={TypoVariant.Paragraph2}
          size={SizeType.Large}
          fontWeight={FontWeight.SemiBold}
        >
          Featured Products
        </Typography>
        <RightArrow onPress={handleAlertMessage} />
      </View>
      {isPending ? (
        <LoadingIndicator />
      ) : (
        <HorizontalCards products={products} />
      )}
    </>
  );
};

export default FeaturedProducts;
