import React from 'react';
import { Text } from 'react-native';

// Types
import { FontWeight, SizeType, TypoVariant } from '@interfaces/index';

// Styles
import styles from './styles';

interface IProps extends React.ComponentProps<typeof Text> {
  size?: SizeType;
  variant?: TypoVariant;
  fontWeight?: FontWeight;
}

const Typography = ({
  size = SizeType.Default,
  variant = TypoVariant.Paragraph1,
  fontWeight = FontWeight.Regular,
  children,
  ...props
}: IProps) => {
  const { style, ...rest } = props;

  return (
    <Text
      style={[styles[variant], styles[fontWeight], { fontSize: size }, style]}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default Typography;
