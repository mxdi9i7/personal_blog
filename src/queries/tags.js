import gql from "graphql-tag";

export const fetchAllTags = gql`
  {
    allTags {
      title
      slug
    }
  }
`;
