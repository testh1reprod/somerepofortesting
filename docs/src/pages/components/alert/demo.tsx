import * as React from 'react';
import { Alert } from '@aws-amplify/ui-react';
import { Demo } from '@/components/Demo';
import { AlertPropControls } from './AlertPropControls';
import { useAlertProps } from './useAlertProps';
import { DemoState } from 'src/pages/_app.page';

const propsToCode = (props) => {
  return (
    `<Alert` +
    (props.variation
      ? `\n  variation=${JSON.stringify(props.variation)}`
      : '') +
    `
  isDismissible={${props.isDismissible}}
  hasIcon={${props.hasIcon}}
  heading="${props.heading}"
  >
  ${props.body}
</Alert>`
  );
};

export const AlertDemo = () => {
  const alertProps = useAlertProps(
    DemoState.get('alert') || {
      isDismissible: false,
      hasIcon: true,
      heading: 'Alert heading',
      body: 'This is the alert message',
    }
  );

  React.useEffect(() => {
    DemoState.set('alert', alertProps);
  });

  return (
    <Demo
      code={propsToCode(alertProps)}
      propControls={<AlertPropControls {...alertProps} />}
    >
      <Alert
        variation={alertProps.variation}
        isDismissible={alertProps.isDismissible}
        hasIcon={alertProps.hasIcon}
        heading={alertProps.heading}
      >
        {alertProps.body}
      </Alert>
    </Demo>
  );
};
