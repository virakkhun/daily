import { AUTH_QUERY } from "../../_domains/constants/auth-query";
import { LoginDTO } from "../../_infrastructure/dtos/login.dto";

export type AuthForm = LoginDTO & {
  formName: AUTH_QUERY.LOGIN | AUTH_QUERY.SIGN_UP;
};
