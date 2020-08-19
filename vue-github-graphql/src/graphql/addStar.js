import gql from "graphql-tag";
export const ADD_STAR = gql`
  mutation AddStar($repoid: ID!) {
    addStar(input: { starrableId: $repoid }) {
      starrable {
        viewerHasStarred
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
