type LoginFormErrors = {
  email?: string;
  password?: string;
};

type SignUpFormErrors = {
  email?: string;
  phoneNumber?: string;
  password?: string;
};

type SignUpFormData = {
  email: string;
  phone: string;
  password: string;
};

type VerifyCodePayload = {
  code: string;
};

type ResendCodePayload = {
  phone: string;
};

type LoginFormData = {
  email: string;
  password: string;
};

type ForgotFromErrors = {
  email?: string;
};

type ValidateLoginForm = (formData: LoginFormData) => {
  errors: LoginFormErrors;
  isFormValid: boolean;
};

type ValidateSignUpForm = (formData: SignUpFormData) => {
  errors: SignUpFormErrors;
  isFormValid: boolean;
};

type ValidateForgotForm = (email: string) => {
  errors: ForgotFromErrors;
  isFormValid: boolean;
};

export type {
  ValidateLoginForm,
  ValidateSignUpForm,
  LoginFormErrors,
  SignUpFormErrors,
  ForgotFromErrors,
  ValidateForgotForm,
  SignUpFormData,
  VerifyCodePayload,
  LoginFormData,
  ResendCodePayload,
};
