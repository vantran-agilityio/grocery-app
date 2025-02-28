import { useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';

// Components
import { Typography } from '@components';

// Types
import { FontWeight, SizeType, TypoVariant } from '@interfaces';

// Stores
import { useStore } from '@repo/stores';

// Styles
import styles from './styles';

const HistorySearch = () => {
  // Stores
  const searchHistory = useStore.use.searchHistory();
  const resetSearchHistory = useStore.use.resetSearchHistory();
  const setCurrentSearchItem = useStore.use.setCurrentSearchItem();

  const handleSelectSearchHistory = useCallback((item: string) => {
    setCurrentSearchItem(item);
  }, []);

  const handleClearSearchHistory = useCallback(() => {
    resetSearchHistory();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Typography
          variant={TypoVariant.Paragraph2}
          size={SizeType.Large}
          fontWeight={FontWeight.SemiBold}
        >
          Search History
        </Typography>

        <Typography
          size={SizeType.Small}
          style={styles.clear}
          onPress={handleClearSearchHistory}
        >
          clear
        </Typography>
      </View>
      <View style={styles.itemWrapper}>
        {searchHistory.map((item, index) => (
          <TouchableOpacity
            hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
            onPress={() => handleSelectSearchHistory(item)}
            key={`${item}-${index}`}
          >
            <Typography style={styles.item} size={SizeType.Xs}>
              {item}
            </Typography>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default HistorySearch;
