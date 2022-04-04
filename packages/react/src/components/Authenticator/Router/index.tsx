import { CognitoUserAmplify } from '@aws-amplify/ui';
import classNames from 'classnames';
import { ComponentClassNames } from '../../../primitives/shared';

import { useAuthenticator } from '..';
import { View } from '../../..';
import { ConfirmSignUp } from '../ConfirmSignUp';
import { ForceNewPassword } from '../ForceNewPassword';
import { useCustomComponents } from '../hooks/useCustomComponents';
import { SetupTOTP } from '../SetupTOTP';
import { SignInSignUpTabs } from '../shared';
import { ConfirmVerifyUser, VerifyUser } from '../VerifyUser';
import { ConfirmSignIn } from '../ConfirmSignIn/ConfirmSignIn';
import { ConfirmResetPassword, ResetPassword } from '../ResetPassword';

export type RouterProps = {
  className?: string;
  children?: ({
    signOut,
    user,
  }: {
    signOut: ReturnType<typeof useAuthenticator>['signOut'];
    user: CognitoUserAmplify;
  }) => JSX.Element;
  variation?: 'default' | 'modal';
  hideSignUp?: boolean;
};

const hasTabs = (route: string) => {
  return route === 'signIn' || 'signUp';
};

export function Router({
  children,
  className,
  variation = 'default',
  hideSignUp,
}: RouterProps) {
  const { route, signOut, user } = useAuthenticator();

  const {
    components: { Header, Footer },
  } = useCustomComponents();

  // `Authenticator` might not have `children` for non SPA use cases.
  if (['authenticated', 'signOut'].includes(route)) {
    return children ? children({ signOut, user }) : null;
  }

  return (
    <>
      <View
        className={classNames(
          className,
          ComponentClassNames.Authenticator,
          `amplify-authenticator--${variation}`
        )}
        data-amplify-authenticator=""
        data-variation={variation}
      >
        <View
          data-amplify-container=""
          className={ComponentClassNames.AuthenticatorContainer}
        >
          <Header />

          <View
            className={ComponentClassNames.AuthenticatorRouter}
            data-amplify-router=""
            data-amplify-router-content={hasTabs(route) ? undefined : ''}
          >
            {(() => {
              switch (route) {
                case 'idle':
                case 'setup':
                  return null;
                case 'confirmSignUp':
                  return <ConfirmSignUp />;
                case 'confirmSignIn':
                  return <ConfirmSignIn />;
                case 'setupTOTP':
                  return <SetupTOTP />;
                case 'signIn':
                case 'signUp':
                  return <SignInSignUpTabs hideSignUp={hideSignUp} />;
                case 'forceNewPassword':
                  return <ForceNewPassword />;
                case 'resetPassword':
                  return <ResetPassword />;
                case 'confirmResetPassword':
                  return <ConfirmResetPassword />;
                case 'verifyUser':
                  return <VerifyUser />;
                case 'confirmVerifyUser':
                  return <ConfirmVerifyUser />;

                default:
                  console.warn(
                    'Unhandled Authenicator route – please open an issue: ',
                    route
                  );

                  return null;
              }
            })()}
          </View>

          <Footer />
        </View>
      </View>
    </>
  );
}
