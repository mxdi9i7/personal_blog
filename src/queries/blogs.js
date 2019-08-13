import gql from "graphql-tag";

export const getRecentBlogs = gql`
  {
    allBlogs {
      title
      slug
      excerpt
      _publishedAt
      tags {
        title
      }
      thumbnailImage {
        url
      }
    }
  }
`;

export const getFeaturedBlogs = gql`
  {
    allBlogs(filter: { isFeatured: { eq: true } }, first: "3") {
      title
      slug
      excerpt
      _publishedAt
      heroImage {
        url
      }
    }
  }
`;

export const getBlogContent = gql`
  query($slug: String) {
    blog(filter: { slug: { eq: $slug } }) {
      title
      body
      excerpt
      articleBody {
        ... on BodyTextRecord {
          body(markdown: true)
        }
        ... on CodeBlockRecord {
          id
          codeBlock(markdown: true)
        }
        ... on VideoRecord {
          video {
            url
          }
        }
        ... on ImageRecord {
          image {
            url
            title
          }
        }
      }
      _publishedAt
      heroImage {
        url
      }
    }
  }
`;
