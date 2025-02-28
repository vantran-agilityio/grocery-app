import { useCallback } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Components
import { Typography, Button, CartLargeIcon } from '@components';

// Types
import { SizeType, TypoVariant, FontWeight } from '@interfaces';

// Styles
import styles from './styles';

// Constants
import { ScreenNames, RootStackParamList } from '@repo/constants';

const EmptyCart = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, ScreenNames.Cart>
    >();

  const handleStartShopping = useCallback(() => {
    navigation.navigate(ScreenNames.HomeStack);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <CartLargeIcon />
        <Typography
          variant={TypoVariant.Paragraph2}
          size={SizeType.Large}
          fontWeight={FontWeight.SemiBold}
        >
          Your cart is empty !
        </Typography>
        <Typography style={styles.subtitle}>
          You will get a response within a few minutes.
        </Typography>
      </View>
      <Button onPress={handleStartShopping}>Start shopping</Button>
    </View>
  );
};

export default EmptyCart;
