import request, { gql } from "graphql-request";
import { useEffect, useState } from "react";

const MASTER_URL = process.env.NEXT_PUBLICK_BACKEND_API_URL;

const GetCategory = () => {
  const [categoryList, setCategoryList] = useState([]);

  const handleGetCategory = async () => {
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
    setCategoryList(result?.categories);
  };

  useEffect(() => {
    handleGetCategory();
  });

  return { categoryList };
};
export default GetCategory;
