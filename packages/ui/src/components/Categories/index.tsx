import { useCallback, useEffect } from 'react';
import { Alert, ScrollView, View } from 'react-native';

// Components
import { Typography, LoadingIndicator } from '@components';
import CategoryItem from './CategoryItem';
import { RightArrow } from '@components';

// Types
import { FontWeight, SizeType, TypoVariant } from '@interfaces';

// Constants
import { ALERT } from '@repo/constants';

// Hooks
import { useCategoryList } from '@repo/hooks';

// Stores
import { useStore } from '@repo/stores';

// Styles
import styles from './styles';

const Categories = () => {
  const { data, isPending, isSuccess } = useCategoryList();

  // Stores
  const categories = useStore.use.categories();
  const setCategories = useStore.use.setCategories();

  useEffect(() => {
    if (isSuccess) {
      setCategories(data.categories);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, data]);

  const handleAlertMessage = useCallback(() => {
    Alert.alert(ALERT.COMING_SOON);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Typography
          variant={TypoVariant.Paragraph2}
          size={SizeType.Large}
          fontWeight={FontWeight.SemiBold}
        >
          Categories
        </Typography>
        <RightArrow onPress={handleAlertMessage} />
      </View>

      <View style={styles.categories}>
        {isPending && !categories.length ? (
          <LoadingIndicator />
        ) : (
          <ScrollView
            horizontal
            contentContainerStyle={styles.categories}
            showsHorizontalScrollIndicator={false}
          >
            {(categories || []).map((item) => (
              <CategoryItem
                item={item}
                key={item.id}
                onPressItem={handleAlertMessage}
              />
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default Categories;
