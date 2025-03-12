import { useCallback, useState } from 'react';
import {
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

// Components
import AddToCartButton from './AddToCartButton';
import { Typography, HeartFillIcon, HeartIcon } from '@components';

// Types
import { SizeType, TypoVariant, FontWeight } from '@interfaces';

// Stores
import { useStore } from '@repo/stores';

// Styles
import styles from './styles';

interface IProp {
  id: number;
  name: string;
  productUnitId: number;
  image: string;
  price: number;
  onNavigateToDetails: () => void;
}

const Item = ({
  id,
  name,
  productUnitId,
  image,
  price,
  onNavigateToDetails,
}: IProp) => {
  const [favorite, setFavorite] = useState(false);

  const handleToggleFavorite = useCallback(() => {
    setFavorite((prev) => !prev);
  }, []);

  // Stores
  const getProductUnitNameById = useStore.use.getProductUnitNameById();

  return (
    <View style={styles.itemWrapper}>
      <View style={styles.top}>
        <TouchableWithoutFeedback onPress={onNavigateToDetails}>
          <View style={styles.content}>
            <View style={styles.circle} />
            <Image source={{ uri: image }} style={[styles.image]} />
            <Typography
              size={SizeType.Small}
              style={styles.price}
              fontWeight={FontWeight.Medium}
            >{`$${price}`}</Typography>
            <Typography
              variant={TypoVariant.Paragraph2}
              style={styles.name}
              fontWeight={FontWeight.SemiBold}
            >
              {name}
            </Typography>
            <Typography
              size={SizeType.Small}
              style={styles.amount}
              fontWeight={FontWeight.Medium}
            >
              {getProductUnitNameById(productUnitId)}
            </Typography>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.bottom}>
        <AddToCartButton productId={id} />
      </View>

      <TouchableOpacity
        style={styles.favoriteIcon}
        onPress={handleToggleFavorite}
      >
        {!favorite ? <HeartIcon /> : <HeartFillIcon />}
      </TouchableOpacity>
    </View>
  );
};

export default Item;
