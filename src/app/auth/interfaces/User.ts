export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  gender: string;

  likes: object;
  posts: object;
  logins: any;
  passwordChanges: any;
}
