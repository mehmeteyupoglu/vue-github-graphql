import gql from "graphql-tag";
export const Sample = gql`
  query {
    viewer {
      login
      company
      followers(first: 1) {
        totalCount
      }
    }
  }
`;
