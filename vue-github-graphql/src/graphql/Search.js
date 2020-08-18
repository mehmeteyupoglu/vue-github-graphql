import gql from "graphql-tag";

export const SEARCH = gql`
  query SearchPublicRepos($queryString: String!) {
    search(query: $queryString, type: REPOSITORY, first: 40) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            owner {
              login
              avatarUrl
              url
            }

            description
            name
            stargazers {
              totalCount
            }
            watchers {
              totalCount
            }
            isPrivate
            id
          }
        }
      }
    }
  }
`;
