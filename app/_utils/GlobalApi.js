const { gql, default: request } = require("graphql-request");

const MASTER_URL = process.env.NEXT_PUBLICK_BACKEND_API_URL;
// get all categories
export const GetCategory = async () => {
  const query = gql`
    query Categories {
      categories(first: 50) {
        id
        name
        slug
        icon {
          url
        }
      }
    }
  `;
  const result = await request(
    "https://api-ap-south-1.hygraph.com/v2/clukj0wla0djt08wb4072emlu/master",
    query
  );

  return result;
};
