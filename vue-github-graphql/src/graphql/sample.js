import gql from "graphql-tag";
export const Sample = gql`
  query {
    viewer {
      email
      name
      login
      id
      avatarUrl
      repositories(last: 30) {
        edges {
          node {
            isPrivate
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
