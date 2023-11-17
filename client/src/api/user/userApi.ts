import { post, get } from '../../config/requests';
import { REGISTER_USER_API, LOGIN_USER_API, LOGOUT_USER_API } from '../../utils/api';
import { User, LoginUser } from './user.types';

export const createUser = (data: User): Promise<User> => post(REGISTER_USER_API, data);

export const loginUser = (data: LoginUser): Promise<User> => post(LOGIN_USER_API, data);

export const logoutUser = () => get(LOGOUT_USER_API);
