export interface CreateUser {
  title: string;
  firstName: string;
  lastName: string;
  gender: string;
  password: string;
  email: string;
  userId: string;
}
export interface ValidateUser {
  userId: string;
  password: string;
}
export interface DeleteUser {
  id: string;
}
