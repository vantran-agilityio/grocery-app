import { memo } from 'react';
import { View } from 'react-native';

// Components
import HorizontalCards from '@components/Cards/HorizontalCards';
import { Typography } from '@components';

// Models
import { Product } from '@repo/models';

// Types
import { FontWeight, SizeType, TypoVariant } from '@interfaces';

// Utils
import { areEqual } from '@repo/utils';

// Styles
import styles from './styles';

interface IProps {
  results: Product[];
}
const SearchResult = ({ results }: IProps) => (
  <View>
    <Typography
      fontWeight={FontWeight.SemiBold}
      size={SizeType.Large}
      variant={TypoVariant.Paragraph2}
    >
      Results
    </Typography>

    {results.length ? (
      <HorizontalCards products={results} />
    ) : (
      <View style={styles.notFoundWrapper}>
        <Typography
          variant={TypoVariant.Paragraph2}
          fontWeight={FontWeight.SemiBold}
        >
          The products are not available!
        </Typography>
      </View>
    )}
  </View>
);

export default memo(SearchResult, areEqual);
