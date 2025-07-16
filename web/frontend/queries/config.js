import { gql } from '@apollo/client';

export const GET_CONFIG_QUERY = gql`
  query GetStoreConfig($paths: [String!]) {
    storeConfig(paths: $paths) @rest(type: "StoreConfig", path: "app/config?{args}") {
      path value
    }
  }
`;

export const SAVE_CONFIG_MUTATION = gql`
  mutation SaveStoreConfig($input: [StoreConfigInput!]!) {
    saveStoreConfig(input: $input) @rest(type: "StoreConfig", path: "app/config", method: "PUT") {
      path value
    }
  }
`;
