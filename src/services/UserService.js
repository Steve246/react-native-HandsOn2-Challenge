import { SERVICE } from "../shared/constants";

export const userService = ({ doGet }) => {
  const getAllUser = async () => {
    try {
      const response = await doGet({
        url: SERVICE.USER_INFO,
      });
      if (response.fullName.length === 0) {
        throw new Error("No User Found");
      } else {
        return response.fullName;
      }
    } catch (e) {
      throw e;
    }
  };

  return { getAllUser };
};
