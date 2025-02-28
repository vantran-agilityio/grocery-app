import { ImageSourcePropType } from 'react-native';

export interface Slide {
  id: number;
  title: string;
  description?: string;
  image: ImageSourcePropType;
}
