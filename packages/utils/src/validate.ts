// Constants
import {
  EMAIL_REGEX,
  PASSWORD_REGEX,
  PHONE_REGEX,
  VALIDATION,
} from '@repo/constants';

// Types
import {
  ForgotFromErrors,
  LoginFormData,
  LoginFormErrors,
  SignUpFormData,
  SignUpFormErrors,
  ValidateForgotForm,
  ValidateLoginForm,
  ValidateSignUpForm,
} from '@repo/models/types';

const isDisableSubmitButton = (formData: SignUpFormData | LoginFormData) =>
  Object.values(formData).some((value) => value === '');

const validateLoginForm: ValidateLoginForm = ({
  email,
  password,
}: LoginFormData) => {
  const errors: LoginFormErrors = {};

  // Validate email field
  if (!email) {
    errors.email = VALIDATION.EMAIL.REQUIRED;
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = VALIDATION.EMAIL.INVALID;
  }

  // Validate password field
  if (!password) {
    errors.password = VALIDATION.PASSWORD.REQUIRED;
  } else if (password.length < 6) {
    errors.password = VALIDATION.PASSWORD.MAX_LENGTH;
  } else if (!PASSWORD_REGEX.test(password)) {
    errors.password = VALIDATION.PASSWORD.INVALID;
  }

  return {
    errors,
    isFormValid: Object.keys(errors).length === 0,
  };
};

const validateSignUpForm: ValidateSignUpForm = ({
  email,
  phone,
  password,
}: SignUpFormData) => {
  const errors: SignUpFormErrors = {};

  // Validate email field
  if (!email) {
    errors.email = VALIDATION.EMAIL.REQUIRED;
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = VALIDATION.EMAIL.INVALID;
  }

  // Validate phone number field
  if (!phone) {
    errors.phoneNumber = VALIDATION.PHONE.REQUIRED;
  } else if (!PHONE_REGEX.test(phone)) {
    errors.phoneNumber = VALIDATION.PHONE.INVALID;
  }

  // Validate password field
  if (!password) {
    errors.password = VALIDATION.PASSWORD.REQUIRED;
  } else if (password.length < 6) {
    errors.password = VALIDATION.PASSWORD.MAX_LENGTH;
  } else if (!PASSWORD_REGEX.test(password)) {
    errors.password = VALIDATION.PASSWORD.INVALID;
  }

  return {
    errors,
    isFormValid: Object.keys(errors).length === 0,
  };
};

const validateForgotPasswordFrom: ValidateForgotForm = (email: string) => {
  const errors: ForgotFromErrors = {};

  if (!email) {
    errors.email = VALIDATION.EMAIL.REQUIRED;
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = VALIDATION.EMAIL.INVALID;
  }

  return {
    errors,
    isFormValid: Object.keys(errors).length === 0,
  };
};

export {
  isDisableSubmitButton,
  validateLoginForm,
  validateSignUpForm,
  validateForgotPasswordFrom,
};
