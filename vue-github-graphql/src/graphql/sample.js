import gql from "graphql-tag";
export const Sample = gql`
  query {
    viewer {
      login
      id
      avatarUrl
      repositories(last: 10) {
        edges {
          node {
            id
            name
            nameWithOwner
            description
            stargazers(first: 20) {
              totalCount
            }
            watchers(first: 20) {
              totalCount
            }
          }
        }
      }
    }
  }
`;
