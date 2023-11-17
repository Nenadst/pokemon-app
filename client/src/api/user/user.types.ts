export interface User {
  name: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  userInfo: string;
  imageUrl?: string | ArrayBuffer | null;
}

export interface LoginUser {
  email: string;
  password: string;
}
