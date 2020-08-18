import gql from "graphql-tag";
export const Sample = gql`
  query {
    viewer {
      url
      name
      login
      id
      avatarUrl
    }
  }
`;
