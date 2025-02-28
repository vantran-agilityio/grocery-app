import { View } from 'react-native';

// Components
import ProductContent from './ProductContent';
import ProductFooter from './ProductFooter';

// Styles
import styles from './styles';

interface IProps {
  id: number;
  price: number;
  name: string;
  productUnitId: number;
  description: string;
}

const ProductInfo = ({
  id,
  price,
  name,
  productUnitId,
  description,
}: IProps) => (
  <View style={styles.content}>
    <ProductContent
      price={price}
      name={name}
      productUnitId={productUnitId}
      description={description}
    />
    <ProductFooter productId={id} />
  </View>
);

export default ProductInfo;
