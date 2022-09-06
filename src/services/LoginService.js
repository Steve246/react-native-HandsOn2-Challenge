import { SERVICE } from "../shared/constants";

export const loginService = ({ doPost }) => {
  const authenticate = async (userCred = {}) => {
    try {
      return await doPost({ url: SERVICE.LOGIN, data: userCred });
    } catch (e) {
      throw e;
    }
  };

  return { authenticate };
};
