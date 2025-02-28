import { useCallback, useRef, useState } from 'react';
import {
  FlatList,
  LayoutChangeEvent,
  View,
  ViewToken,
  ViewabilityConfigCallbackPairs,
} from 'react-native';

// Components
import BannerItem from './BannerItem';

// Themes
import { colors } from '@themes';

// Mocks
import { homeSlides } from '@mocks';

// Styles
import styles from './styles';

const Banners = () => {
  const [layout, setLayout] = useState<{ width: number }>({ width: 0 });
  const [currentActiveSlide, setCurrentActiveSlide] = useState(0);

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 100,
    waitForInteraction: true,
  };

  const onViewableItemsChanged = useCallback(
    ({ changed }: { changed: Array<ViewToken> }) => {
      if (
        changed &&
        changed.length > 0 &&
        typeof changed[0].index === 'number'
      ) {
        setCurrentActiveSlide(changed[0].index);
      }
    },
    []
  );

  const viewabilityConfigCallbackPairs = useRef<ViewabilityConfigCallbackPairs>(
    [{ viewabilityConfig, onViewableItemsChanged }]
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={homeSlides}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({ item }) => (
          <BannerItem item={item} width={layout.width}></BannerItem>
        )}
        numColumns={1}
        onLayout={(event: LayoutChangeEvent) =>
          setLayout(event.nativeEvent.layout)
        }
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />

      <View style={styles.indicatorWrapper}>
        {homeSlides.map((_, index) => {
          let activeStyle = {};
          if (index === currentActiveSlide) {
            activeStyle = { width: 32, backgroundColor: colors.primary.main };
          }

          return (
            <View
              testID="indicator"
              style={[styles.indicator, activeStyle]}
              key={index}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Banners;
