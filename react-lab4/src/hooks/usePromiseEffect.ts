import { DependencyList, useEffect, useState } from "react";

type PromiseState<T> =
  | { status: "idle" | "pending"; value: undefined; error: undefined }
  | { status: "fulfilled"; value: T; error: undefined }
  | { status: "rejected"; value: undefined; error: Error };

export default function usePromiseEffect<T>(
  effect: () => Promise<T>,
  deps: DependencyList,
) {
  const [state, setState] = useState<PromiseState<T>>({
    status: "idle",
    value: undefined,
    error: undefined,
  });

  useEffect(() => {
    effect()
      .then(
        (value) =>
          setState({
            status: "fulfilled",
            value,
            error: undefined,
          }),
      )
      .catch((error) =>
        setState({
          status: "rejected",
          value: undefined,
          error,
        })
      );
  }, deps);

  return state;
}
