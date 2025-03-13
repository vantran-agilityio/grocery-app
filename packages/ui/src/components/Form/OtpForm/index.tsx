/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useCallback, useEffect } from 'react';
import { TextInput, View } from 'react-native';

// Themes
import { colors } from '@themes';

// Components
import { Button, Typography } from '@components';

// Types
import { FontWeight, TypoVariant } from '@interfaces';

// Hooks
import {
  VerifyCodeError,
  useAuthVerifyCode,
  useAuthResendOtp,
} from '@repo/hooks';

// Stores
import { useStore } from '@repo/stores';

// Styles
import styles from './styles';
import { SUCCESS } from '@repo/constants';

interface IProps {
  length?: number;
  onSuccess: () => void;
  onError: (error?: VerifyCodeError) => void;
  onResendOTPResult: (message: string) => void;
}

const OtpForm = ({
  length = 6,
  onError,
  onSuccess,
  onResendOTPResult,
}: IProps) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));

  const inputRefs = useRef<TextInput[]>([]);

  // Queries
  const { mutateAsync: verifyCodeMutate, isPending: isVerifyCodePending } =
    useAuthVerifyCode();

  const { mutateAsync: resendOtpMutate } = useAuthResendOtp();

  // Stores
  const phone = useStore.use.phone();

  const [isAllFieldsFilled, setIsAllFieldsFilled] = useState(false);

  useEffect(() => {
    // Auto submit form when all fields are filled
    if (isAllFieldsFilled) {
      verifyCodeMutate(
        { code: otp.join('') },
        {
          onSuccess,
          onError: (error) => onError(error.response?.data),
        }
      );
    }
  }, [isAllFieldsFilled]);

  const handleOtpChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    if (index < length - 1 && value) {
      inputRefs.current[index + 1].focus();
    }

    const allFieldsFilled = newOtp.every((value) => value !== '');
    setIsAllFieldsFilled(allFieldsFilled);
  };

  const handleOtpKeyPress = (index: number, key: string) => {
    if (key === 'Backspace' && index > 0) {
      // Moves the cursor to the previous input
      inputRefs.current[index - 1].focus();

      // Sets selection to the previous input
      inputRefs.current[index - 1].setNativeProps({
        selection: {
          start: 0,
          end: 1,
        },
      });
    }
  };

  const handleNextButton = () => {
    if (isAllFieldsFilled) {
      verifyCodeMutate({ code: otp.join('') });
    }
  };

  const handleResendCode = useCallback(() => {
    if (phone) {
      resendOtpMutate(
        { phone },
        {
          onSuccess: () => onResendOTPResult(SUCCESS.RESEND_OTP),
          onError: (error) => onResendOTPResult(error.message),
        }
      );
    }
  }, [phone]);

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.inputWrapper}>
          {Array(length)
            .fill('')
            .map((_, index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref as TextInput)}
                style={styles.input}
                maxLength={1}
                onChangeText={(value) => handleOtpChange(index, value)}
                onKeyPress={({ nativeEvent: { key } }) =>
                  handleOtpKeyPress(index, key)
                }
                value={otp[index]}
                placeholder="●"
                placeholderTextColor={colors.text.secondary}
                keyboardType="numeric"
              />
            ))}
        </View>
        <Button
          onPress={handleNextButton}
          disabled={!isAllFieldsFilled || isVerifyCodePending}
        >
          Next
        </Button>
      </View>

      <View style={styles.helperContent}>
        <Typography variant={TypoVariant.Paragraph2}>
          {`Didn't receive the code ?`}{' '}
        </Typography>

        <Typography
          variant={TypoVariant.Paragraph2}
          fontWeight={FontWeight.Medium}
          onPress={handleResendCode}
        >
          Resend a new code
        </Typography>
      </View>
    </View>
  );
};

export default OtpForm;
