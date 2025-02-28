import { useCallback, useState, memo, forwardRef, LegacyRef } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';

// Icons
import { EyeIcon, EyeSlashIcon } from '@componentss';

// Styles
import styles from './styles';

interface IProps extends React.ComponentProps<typeof TextInput> {
  placeholder: string;
  icon: JSX.Element;
  autoComplete?: 'email' | 'password' | 'off';
  containerStyles?: { [name: string]: number | string };
  isError?: boolean;
  isPassword?: boolean;
}

const Input = forwardRef(
  (
    {
      placeholder,
      autoComplete = 'off',
      containerStyles,
      icon: Icon,
      isError = false,
      isPassword,
      style,
      ...props
    }: IProps,
    ref: LegacyRef<TextInput>
  ) => {
    const [isSecured, setIsSecured] = useState(isPassword);

    const handleEyeToggle = useCallback(() => {
      setIsSecured((prev) => !prev);
    }, []);

    return (
      <View
        style={[
          styles.container,
          containerStyles,
          isError ? styles.error : null,
        ]}
        testID="Input"
      >
        {Icon && <View style={styles.iconWrapper}>{Icon}</View>}
        <TextInput
          ref={ref}
          testID="Input-TextInput"
          autoComplete={autoComplete}
          placeholder={placeholder}
          secureTextEntry={isSecured}
          style={[styles.baseInput, style]}
          {...props}
        />

        <TouchableOpacity onPress={handleEyeToggle} style={styles.iconWrapper}>
          {isPassword && (
            <>
              {isSecured && <EyeIcon />}
              {!isSecured && <EyeSlashIcon />}
            </>
          )}
        </TouchableOpacity>
      </View>
    );
  }
);

Input.displayName = 'Input';

export default memo(Input);
