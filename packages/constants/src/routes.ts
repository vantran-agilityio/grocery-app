const ROUTES = {
  AUTH: {
    LOGIN: '/authentication/sign-in',
    SIGNUP: '/authentication/sign-up',
    VERIFY_CODE: '/authentication/activate-account',
    RESET_PASSWORD: '/authentication/reset-password',
    RESEND_OTP: '/authentication/resend-activate-otp',
  },
  CATEGORY: {
    GET_ALL: '/catalogue/categories',
  },
  PRODUCT: {
    GET_ALL: '/catalogue/products',
    getDetail: (id: number) => `/catalogue/products/${id}`,
    search: (value: string) => `/catalogue/products?search=${value}`,
  },
  PRODUCT_UNIT: {
    GET_ALL: '/catalogue/product-units',
  },
  CART: {
    GET_ALL: (userId: number) => `/users/${userId}/cart-items`,
    ADD: (userId: number) => `/users/${userId}/cart-items`,
    deleteByProductId: (id: number, userId: number) =>
      `/users/${userId}/cart-items/${id}`,
    updateCartItem: (id: number, userId: number) =>
      `/users/${userId}/cart-items/${id}`,
  },
};

const APP_ROUTES = {
  AUTH_STACK: '/(auth)',
  AUTH_LOGIN: '/(auth)/login',
  AUTH_SIGNUP: '/(auth)/(signup)',
  AUTH_SIGNUP_VERIFY_CODE: '/(auth)/(signup)/verify-code',
  AUTH_FORGOT_PASSWORD: '/(auth)/forgot-password',

  POST_AUTH_STACK: '/(post-auth)',
  POST_AUTH_SEARCH: '/(post-auth)/search',
  POST_AUTH_DETAILS: (id: number) => `/(post-auth)/product/${id}`,
  POST_AUTH_CART_ITEMS: '/(post-auth)/cart-items',
};

export { ROUTES, APP_ROUTES };
