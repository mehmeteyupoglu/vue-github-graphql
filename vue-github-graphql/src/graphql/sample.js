import gql from "graphql-tag";
export const Sample = gql`
  query {
    viewer {
      login
      id
      name
      avatarUrl
      repositories(first: 10) {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  }
`;
