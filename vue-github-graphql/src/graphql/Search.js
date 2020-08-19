import gql from "graphql-tag";

export const SEARCH = gql`
  query SearchPublicRepos($queryString: String!) {
    search(query: $queryString, type: REPOSITORY, first: 20) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            owner {
              login
              avatarUrl
              url
            }
            viewerHasStarred
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
