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
