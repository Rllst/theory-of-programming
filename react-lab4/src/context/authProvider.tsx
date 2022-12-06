import { createContext, ReactNode, useContext, useReducer } from "react";
import authReducer, { initialState } from "../reducer/authReducer";
import { authService } from "../services";
import { User } from "../types";

interface AuthContextType {
  user: Omit<User, "password">;
  signin: (callback: VoidFunction) => Promise<void>;
  signout: VoidFunction;
  field: (fieldName: string, value: string) => void;
}

const AuthContext = createContext<AuthContextType>(undefined!);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const { username, password, isLoading, isLoggedIn } = state;

  const signin = async (
    callback: VoidFunction,
  ) => {
    dispatch({ type: "authenticate" });

    try {
      await authService.signin({ username, password });
      localStorage["isLoggedIn"] = true;
      dispatch({ type: "signin" });
    } catch (error) {
      dispatch({ type: "error" });
      alert(error);
    }
    callback();
  };

  const signout = () => {
    localStorage["isLoggedIn"] = false;
    dispatch({ type: "signout" });
  };

  const field = (fieldName: string, value: string) =>
    dispatch({ type: "field", fieldName, payload: value });

  const value = {
    user: { username, isLoading, isLoggedIn },
    signin,
    signout,
    field,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
