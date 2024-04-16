
import { request, gql } from "graphql-request";

const MASTER_URL =
  "https://api-ap-northeast-1.hygraph.com/v2/clv0ohjlm1n0708w4ieiq2wh3/master";

const getSilder = async () => {
  const query = gql`
  query GetSliders {
    sliders {
      decs
      images {
        url
      }
      id
    }
  }
  
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export default {
  getSilder,
};
