import gql from "graphql-tag";
export const STAR = gql`
  mutation removeStarMutation($input: RemoveStarInput!) {
    removeStar(input: $input) {
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
