import { NavigationMenu } from '@shopify/app-bridge-react';

export default () => {
  return (
    <NavigationMenu
      navigationLinks={[
        {
          label: "Settings",
          destination: "/settings",
        }
      ]}
    />
  );
};