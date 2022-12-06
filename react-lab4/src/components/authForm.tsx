import { FormEvent } from "react";
import { useAuth } from "../context/authProvider";

const AuthForm = (
  { next }: { next: VoidFunction },
) => {
  const { field, user: { isLoading } } = useAuth();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    next();
  };

  return (
    <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
          Sign in your account
        </h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 md:space-y-6"
        >
          <div className="mb-6">
            <label htmlFor="username" className="label-item">
              Username
            </label>
            <input
              name="username"
              type="text"
              onChange={(e) => field("username", e.currentTarget.value)}
              className="input-item"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="label-item">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={(e) => field("password", e.currentTarget.value)}
              className="input-item"
              required
            />
          </div>
          <button type="submit" className="btn-primary" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
