export type User = {
  username: string;
  password: string;
  isLoading: boolean;
  isLoggedIn: boolean;
};

export type AuthData = Pick<User, "username" | "password">;

export type News = {
  id: string;
  title: string;
  description: string;
  datetime: string;
};
