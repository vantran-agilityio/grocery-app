import { ProductDetail } from '@screens';
import { useLocalSearchParams } from 'expo-router';

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();

  return <ProductDetail id={Number(id)} />;
}
