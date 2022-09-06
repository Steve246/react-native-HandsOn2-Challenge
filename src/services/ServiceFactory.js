import { productService } from "./ProductService";
import { loginService } from "./LoginService";
import { userService } from "./UserService";

export const serviceFactory = () => {
  return {
    productService: productService(apiClient),
    loginService: loginService(apiClient),

    userService: userService(apiClient),
  };
};
