enum ScreenNames {
  FirstTimeLogin = 'firstTimeLogin',
  HomeStack = 'home-stack',
  Login = 'login',
  NotFound = 'notFound',
  Onboarding = 'onboarding',
  OnboardingStack = 'onboarding-stack',
  Splash = 'splash',
  search = 'search',
  SignUp = 'signup',
  ProductDetail = 'productDetail',
  ForgotPassword = 'forgotPassword',
  VerifyNumber = 'verifyNumber',
  Cart = 'cart',
}

enum TabNames {
  Home = 'home',
  Favorite = 'favorite',
  Personal = 'personal',
  Cart = 'cart',
}

type RootStackParamList = {
  [ScreenNames.OnboardingStack]: undefined;
  [ScreenNames.FirstTimeLogin]: undefined;
  [ScreenNames.Login]: undefined;
  [ScreenNames.SignUp]: undefined;
  [ScreenNames.HomeStack]: undefined;
  [ScreenNames.ProductDetail]: { id: number };
  [ScreenNames.NotFound]: undefined;
  [ScreenNames.Cart]: undefined;
  [ScreenNames.search]: undefined;
  [ScreenNames.ForgotPassword]: undefined;
  [ScreenNames.VerifyNumber]: undefined;
};

type OnboardingStackParamList = {
  [ScreenNames.Onboarding]: undefined;
  [ScreenNames.FirstTimeLogin]: undefined;
  [ScreenNames.Login]: undefined;
  [ScreenNames.SignUp]: undefined;
};

type TabParamList = {
  [TabNames.Home]: undefined;
  [TabNames.Personal]: undefined;
  [TabNames.Favorite]: undefined;
  [TabNames.Cart]: undefined;
};

export type { RootStackParamList, OnboardingStackParamList, TabParamList };

export { ScreenNames, TabNames };
