type LoginResponse = {
  token: string;
};

type SignUpResponse = {
  token: string;
};

type SignUpFormError = {
  errors: [{ value: string; msg: string; param: string; location: string }];
};

type VerifyCodeError = {
  errors: [
    {
      param: string;
      msg: string;
    },
  ];
};

type LoginError = {
  errors: [
    {
      param: string;
      msg: string;
    },
  ];
};

type ResetPasswordError = {
  errors: [
    {
      param: string;
      msg: string;
    },
  ];
};

export type {
  LoginResponse,
  SignUpResponse,
  SignUpFormError,
  VerifyCodeError,
  LoginError,
  ResetPasswordError,
};
