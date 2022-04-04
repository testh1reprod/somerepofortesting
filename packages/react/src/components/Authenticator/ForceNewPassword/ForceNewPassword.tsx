import { translate } from '@aws-amplify/ui';
import classNames from 'classnames';
import { ComponentClassNames } from '../../../primitives/shared';

import { Button, Heading, Text } from '../../..';
import {
  useAuthenticator,
  useCustomComponents,
  useFormHandlers,
} from '../hooks';
import { FormFields } from '../shared/FormFields';

export const ForceNewPassword = (): JSX.Element => {
  const { error, isPending, toSignIn } = useAuthenticator();
  const { handleBlur, handleChange, handleSubmit } = useFormHandlers();

  const {
    components: {
      ForceNewPassword: { FormFields = ForceNewPassword.FormFields },
    },
  } = useCustomComponents();

  return (
    <form
      className={classNames(
        ComponentClassNames.AuthenticatorForm,
        ComponentClassNames.AuthenticatorForceNewPassword
      )}
      data-amplify-form=""
      data-amplify-authenticator-forcenewpassword=""
      method="post"
      onChange={handleChange}
      onSubmit={handleSubmit}
      onBlur={handleBlur}
    >
      <fieldset
        className={classNames(
          'amplify-flex',
          ComponentClassNames.AuthenticatorFieldSet
        )}
        disabled={isPending}
      >
        <Heading level={3}>{translate('Change Password')}</Heading>

        <FormFields />
        {error && (
          <Text className="forceNewPasswordErrorText" variation="error">
            {error}
          </Text>
        )}
        <Button
          isDisabled={isPending}
          type="submit"
          variation="primary"
          isLoading={isPending}
          loadingText={translate('Changing')}
          fontWeight="normal"
        >
          {translate('Change Password')}
        </Button>
        <Button
          onClick={toSignIn}
          type="button"
          fontWeight="normal"
          variation="link"
          size="small"
        >
          {translate('Back to Sign In')}
        </Button>
      </fieldset>
    </form>
  );
};

ForceNewPassword.FormFields = () => <FormFields route="forceNewPassword" />;
