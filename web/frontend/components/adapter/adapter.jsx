import { memo } from 'react';
import { useAdapter } from '~/talons/adapter/useAdapter';
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from '@apollo/client';
import { Loading } from '@shopify/app-bridge-react';
import { BlockStack, Box, InlineGrid, Spinner } from '@shopify/polaris';
import PropTypes from 'prop-types';

import {
  AppBridgeProvider,
  PolarisProvider,
} from "~/components/index";

export const ShopifyLoadingFull = () => {
  return (
    <Box>
      <BlockStack inlineAlign="center" align='center'>
        <div style={{minHeight: "100vh", display: "flex", alignItems: "center"}}>
          <Loading />
          <Spinner accessibilityLabel={'Loading'} />
        </div>
      </BlockStack>
    </Box>
  );
};

const ApolloClientProvider = props => {
  const { children } = props;
  const talonProps = useAdapter(props);
  const { client, initialized } = talonProps;

  if (!initialized || !props.domain) {
    return <ShopifyLoadingFull />
  }
  return <ApolloProvider client={client} children={children} />;
};

const Adapter = props => {
  return (
    <PolarisProvider>
      <BrowserRouter>
        <AppBridgeProvider>
          <ApolloClientProvider {...props} />
        </AppBridgeProvider>
      </BrowserRouter>
    </PolarisProvider>
  );
};

Adapter.propTypes = {
  children: PropTypes.node,
  domain: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
};

export default memo(Adapter);
