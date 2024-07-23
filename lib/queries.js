import { gql } from "@apollo/client";

export const GET_PRODUCT_CATEGORIES = gql`
  query Categories {
    productCategories {
      nodes {
        image {
          altText
          mediaItemUrl
          mimeType
          title
        }
        name
        slug
        link
      }
    }
  }
`;




export const GET_PRODUCT_ITEM = gql`
  query Products {
    products {
      edges {
        node {
          id
          slug
          ... on VariableProduct {
            id
            name
            content
            featured
            variations {
              edges {
                node {
                  onSale
                  price
                  regularPrice
                  salePrice
                  stockStatus
                  stockQuantity
                  image {
                    id
                    mediaItemUrl
                    slug
                  }
                  attributes {
                    nodes {
                      label
                      name
                      value
                      id
                    }
                  }
                }
              }
            }
            salePrice
            regularPrice
            price
            onSale
            featuredImage {
              node {
                altText
                mediaItemUrl
              }
            }
          }
          type
          ... on SimpleProduct {
            id
            name
            featuredImage {
              node {
                altText
                mediaItemUrl
              }
            }
            onSale
            price
            salePrice
            regularPrice
            stockQuantity
            stockStatus
            title
          }
        }
      }
    }
  }
`;


export const GET_PRODUCT_DETAIL = gql`
  query ProductDetail($slug: ID!) {
    product(id: $slug, idType: SLUG) {
      id
      databaseId
      averageRating
      slug
      description
      onSale
      image {
        id
        uri
        title
        srcSet
        sourceUrl
      }
      name
      ... on SimpleProduct {
        salePrice
        regularPrice
        price
        id
        stockQuantity
      }
      ... on VariableProduct {
        salePrice
        regularPrice
        price
        id
        variations {
          edges {
            node {
              onSale
              price
              regularPrice
              salePrice
              stockStatus
              stockQuantity
              image {
                id
                mediaItemUrl
                slug
              }
              attributes {
                nodes {
                  label
                  name
                  value
                  id
                }
              }
            }
          }
        }
      }
      ... on ExternalProduct {
        price
        id
        externalUrl
      }
      ... on GroupProduct {
        products {
          nodes {
            ... on SimpleProduct {
              id
              price
            }
          }
        }
        id
      }
    }
  }
`;



