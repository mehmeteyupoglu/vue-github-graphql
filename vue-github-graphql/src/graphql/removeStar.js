import gql from "graphql-tag";
export const REMOVE_STAR = gql`
  mutation RemoveStar($repoid: ID!) {
    removeStar(input: { starrableId: $repoid }) {
      starrable {
        viewerHasStarred
      }
    }
  }
`;
