import { Image, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import { ProductInfo } from '@repo/ui';
import { LoadingIndicator } from '@repo/ui';

// Hooks
import { useProductDetail } from '@repo/hooks';

// Styles
import styles from './styles';

interface Props {
  id: number;
}

const ProductDetail = ({ id }: Props) => {
  const { data } = useProductDetail(id);

  return (
    <View style={styles.background}>
      <SafeAreaView edges={['left', 'right', 'top']} style={styles.container}>
        <View style={styles.circle} />

        {!data ? (
          <LoadingIndicator />
        ) : (
          <>
            <Image source={{ uri: data.image }} style={styles.image} />
            <ProductInfo
              id={data.id}
              price={data.price}
              name={data.name}
              productUnitId={data.productUnitId}
              description={data.description || ''}
            />
          </>
        )}
      </SafeAreaView>
    </View>
  );
};

export default ProductDetail;
