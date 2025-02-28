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
    GET_ALL: '/users/cart-items',
    ADD: '/users/cart-items',
    deleteByProductId: (id: number) => `/users/cart-items/${id}`,
    updateCartItem: (id: number) => `/users/cart-items/${id}`,
  },
};

export { ROUTES };
