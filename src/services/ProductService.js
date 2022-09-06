import { SERVICE } from "../shared/constants";

export const productService = ({ doGet }) => {
  const getAllProduct = async (page) => {
    try {
      const response = await doGet({
        url: SERVICE.PRODUCT,
        params: { pageNo: page, itemPerPage: 20 },
      });
      if (response.products.length === 0) {
        throw new Error("No Data");
      } else {
        return response.products;
      }
    } catch (e) {
      throw e;
    }
  };

  return { getAllProduct };
};
