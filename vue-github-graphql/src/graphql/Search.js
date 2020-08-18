import gql from "graphql-tag";
// export const Search = gql`
//   query search($query: String!) {
//     search(query: $query, type: REPOSITORY, first: 10) {
//       repositoryCount
//       edges {
//         node {
//           ... on Repository {
//             owner {
//               ... on User {
//                 name
//                 avatarUrl
//               }
//             }
//             description
//             name
//             stargazers {
//               totalCount
//             }
//             watchers {
//               totalCount
//             }
//             isPrivate
//             id
//           }
//         }
//       }
//     }
//   }
// `;

export const SEARCH = gql`
  query SearchPublicRepos($queryString: String!) {
    search(query: $queryString, type: REPOSITORY, first: 10) {
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
