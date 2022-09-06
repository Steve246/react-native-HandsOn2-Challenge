export const apiClientFactory = (client) => {
  const doPost = async ({ url = "", data = null }) => {
    try {
      const response = await client.post(url, data);
      return response.data;
    } catch (e) {
      throw e;
    }
  };

  const doGet = async ({ url = "", params = {} }) => {
    try {
      const response = await client.get(url, { params: params });
      return response.data;
    } catch (e) {
      console.log(e.message);
      throw e;
    }
  };

  return { doPost, doGet };
};
