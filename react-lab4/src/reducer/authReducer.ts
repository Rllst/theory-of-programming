import { User } from "../types";

type AuthState = User;

type AuthAction =
  | { type: "authenticate" | "signin" | "signout" | "error" }
  | { type: "field"; fieldName: string; payload: string };

const isLoggedIn = JSON.parse(localStorage["isLoggedIn"] || "false") as boolean;

export const initialState: AuthState = {
  username: isLoggedIn ? "Admin" : "",
  password: "",
  isLoading: false,
  isLoggedIn: isLoggedIn,
};

export default function authReducer(
  state: AuthState,
  action: AuthAction,
): AuthState {
  switch (action.type) {
    case "authenticate": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "signin": {
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
      };
    }
    case "signout": {
      return {
        ...state,
        isLoggedIn: false,
      };
    }
    case "error": {
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        username: "",
        password: "",
      };
    }
    case "field": {
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    }
    default:
      return state;
  }
}
