import type { App } from 'vue';

import {
  SignIn,
  SignUp,
  FederatedSignIn,
  Authenticator,
  RenderInfo,
  PasswordControl,
  UserNameAlias,
  ForceNewPassword,
  ResetPassword,
  ConfirmResetPassword,
  ConfirmSignUp,
  ConfirmSignIn,
  ConfirmVerifyUser,
  VerifyUser,
  AuthenticatorSignUpFormFields,
  AmplifyTextField,
  AmplifyCheckBox,
} from './components/index';

import { useAuthenticator } from './composables/useAuth';

import './styles.css';

export default {
  install: (app: App) => {
    app.component('SignIn', SignIn);
    app.component('SignUp', SignUp);
    app.component('FederatedSignIn', FederatedSignIn);
    app.component('Authenticator', Authenticator);
    app.component('RenderInfo', RenderInfo);
    app.component('PasswordControl', PasswordControl);
    app.component('UserNameAlias', UserNameAlias);
    app.component('ForceNewPassword', ForceNewPassword);
    app.component('ResetPassword', ResetPassword);
    app.component('ConfirmResetPassword', ConfirmResetPassword);
    app.component('ConfirmSignUp', ConfirmSignUp);
    app.component('ConfirmSignIn', ConfirmSignIn);
    app.component('VerifyUser', VerifyUser);
    app.component('ConfirmVerifyUser', ConfirmVerifyUser);
    app.component('AmplifyTextField', AmplifyTextField);
    app.component('AmplifyCheckBox', AmplifyCheckBox);
    app.component(
      'AuthenticatorSignUpFormFields',
      AuthenticatorSignUpFormFields
    );
  },
};

export {
  SignIn,
  SignUp,
  FederatedSignIn,
  Authenticator,
  AuthenticatorSignUpFormFields,
  RenderInfo,
  UserNameAlias,
  ForceNewPassword,
  PasswordControl,
  ResetPassword,
  ConfirmResetPassword,
  ConfirmSignUp,
  ConfirmSignIn,
  ConfirmVerifyUser,
  VerifyUser,
  AmplifyTextField,
  AmplifyCheckBox,
  useAuthenticator,
};