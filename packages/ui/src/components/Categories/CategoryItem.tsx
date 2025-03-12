import { Image, TouchableWithoutFeedback, View } from 'react-native';

// Components
import { Typography } from '@components';

// Types
import { SizeType } from '@interfaces';

// Models
import { Category } from '@repo/models';

// Styles
import styles from './styles';

interface IProps {
  item: Category;
  onPressItem: () => void;
}

const CategoryItem = ({ item: { name, image }, onPressItem }: IProps) => (
  <TouchableWithoutFeedback onPress={onPressItem} testID="CategoryItem">
    <View style={styles.itemContainer}>
      <View>
        <Image
          style={{ objectFit: 'contain', width: 52, height: 52 }}
          source={{ uri: image }}
          width={52}
          height={52}
        />
      </View>
      <Typography size={SizeType.Xs}>{name}</Typography>
    </View>
  </TouchableWithoutFeedback>
);

export default CategoryItem;
