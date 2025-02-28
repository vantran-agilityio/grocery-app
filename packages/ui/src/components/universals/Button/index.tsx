import { memo } from 'react';
import { TouchableHighlight, View } from 'react-native';

// Themes
import { colors } from '@themes';

// Types
import { FontWeight, TypoVariant } from '@interfaces';

// Components
import Typography from '../Typography';

// Styles
import styles from './styles';

interface IProps extends React.ComponentProps<typeof TouchableHighlight> {
  icon?: JSX.Element;
  onPress: () => void;
}

const Button = ({
  onPress,
  icon: Icon,
  style,
  disabled,
  children,
  ...props
}: IProps) => {
  return (
    <TouchableHighlight
      style={[styles.container, disabled ? styles.disabledButton : null, style]}
      onPress={onPress}
      underlayColor={colors.background.light}
      disabled={disabled}
      {...props}
    >
      <View style={styles.contentWrapper}>
        {Icon && <View style={styles.iconWrapper}>{Icon}</View>}
        <Typography
          variant={TypoVariant.Paragraph2}
          style={styles.baseTitle}
          fontWeight={FontWeight.SemiBold}
        >
          {children}
        </Typography>
      </View>
    </TouchableHighlight>
  );
};

export default memo(Button);
