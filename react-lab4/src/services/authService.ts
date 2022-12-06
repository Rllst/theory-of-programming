import { AuthData } from "../types";

export const authService = {
  async signin(
    { username, password }: AuthData,
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "Admin" && password === "12345") {
          resolve();
        } else {
          reject("Incorrect username or password!");
        }
      }, 2000);
    });
  },
};
