import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

export const useThunk = (thunk) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleThunk = useCallback(
    (arg) => {
      setIsLoading(true);
      return dispatch(thunk(arg))
        .unwrap()
        .catch((error) => setError(error.message))
        .finally(() => setIsLoading(false));
    },
    [dispatch, thunk]
  );

  return [handleThunk, isLoading, error];
};
