export const ALERT = {
  COMING_SOON: '🛠️ Coming soon...',
};

export const SERVER_ERROR = 'Some thing went wrong. Please try again!';

export const VALIDATION = {
  EMAIL: {
    INVALID: 'Email is invalid.',
    REQUIRED: 'Email is required.',
  },
  PHONE: {
    INVALID:
      'Phone number start with 03, 05, 07, 08, 09 or 01, followed by 8 digits.',
    REQUIRED: 'Phone number is required.',
  },
  PASSWORD: {
    REQUIRED: 'Password is required.',
    MAX_LENGTH: 'Password must be at least 6 characters.',
    INVALID:
      'The password contains at least one lowercase letter, one uppercase letter, one digit, and one special character',
  },
};

export const SUCCESS = {
  SIGNUP: {
    VERIFIED: 'You have successfully signed up.',
  },
  sentCodeToEmail: (email: string) => `A code has been sent to ${email}.`,
  passwordSentToEmail: (email: string) => `Password has been sent to ${email}.`,
  LOGIN: 'You have successfully logged in.',
  RESEND_OTP: 'A code has been sent to your email.',
  ADD_TO_CART: 'Item added to cart.',
  DELETE_CART_ITEM: 'Item deleted from cart.',
  UPDATE_CART_ITEM: 'Item updated.',
};
