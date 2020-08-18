import gql from "graphql-tag";
export const STAR = gql`
  mutation addStarMutation($input: AddStarInput!) {
    addStar(input: $input) {
      clientMutationId
      starrable {
        viewerHasStarred
        id
        stargazers(last: 20) {
          edges {
            node {
              name
            }
          }
        }
      }
    }
  }
`;

// {
//   "input": {
//     "clientMutationId": "MDQ6VXNlcjU5MzIwOTY2",
//       "starrableId": "MDEwOlJlcG9zaXRvcnkyNTEzMDM1MzE"
//   }
// }
