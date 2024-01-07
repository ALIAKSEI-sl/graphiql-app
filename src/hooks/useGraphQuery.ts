import { createBody, createHeaders, getResponse } from "../api/graphiQL";
import { showToastMessage } from "../modules/forms/util/showToastMessage";
import { graphValueSlice } from "../store/reducers/GraphValueSlice";
import { useAppDispatch, useAppSelector } from "./redux";
import { useLocalization } from "./useLocalization";

export const useGraphQuery = (): (() => Promise<void>) => {
  const dispatch = useAppDispatch();
  const dictionary = useLocalization();

  const { setIsLoading, setResponse } = graphValueSlice.actions;

  const { currentApi } = useAppSelector((state) => state.apiReducer);

  const { query, headers, variables } = useAppSelector(
    (state) => state.graphValueReducer,
  );

  const sendRequest = async () => {
    if (!query) {
      showToastMessage(dictionary.empty_body, "red");
    }

    if (!currentApi) {
      showToastMessage(dictionary.empty_url, "red");
    }

    dispatch(setIsLoading(true));
    try {
      const headersInit = createHeaders(headers);
      const body = createBody(query, variables);

      if (body) {
        const { data, errors, statusCode } = await getResponse(
          currentApi,
          body,
          headersInit,
        );

        dispatch(setResponse({ data, errors, statusCode }));
      }
    } catch (error) {
      if (error instanceof SyntaxError) {
        showToastMessage(error.message, "red");
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  return sendRequest;
};
