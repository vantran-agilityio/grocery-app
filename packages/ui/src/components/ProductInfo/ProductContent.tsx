import { View } from 'react-native';

// Types
import { FontWeight, SizeType, TypoVariant } from '@interfaces';

// Components
import { Typography } from '@components';

// Stores
import { useStore } from '@repo/stores';

// Styles
import styles from './styles';

interface IProps {
  price: number;
  name: string;
  productUnitId: number;
  description: string;
}

const ProductContent = ({
  price,
  name,
  productUnitId,
  description,
}: IProps) => {
  // Stores
  const getProductUnitNameById = useStore.use.getProductUnitNameById();

  return (
    <>
      <View style={styles.header}>
        <Typography
          style={styles.price}
          fontWeight={FontWeight.SemiBold}
        >{`$${price}`}</Typography>
        <Typography
          size={SizeType.Large}
          fontWeight={FontWeight.SemiBold}
          variant={TypoVariant.Paragraph2}
        >
          {name}
        </Typography>
        <Typography size={SizeType.Small} fontWeight={FontWeight.Medium}>
          {getProductUnitNameById(productUnitId)}
        </Typography>
      </View>

      <Typography
        size={SizeType.Small}
        style={styles.description}
        numberOfLines={6}
      >
        {description}
      </Typography>
    </>
  );
};

export default ProductContent;
