export const getResponse = async (
  url: string,
  body: RequestInit["body"],
  headers: RequestInit["headers"],
) => {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body,
  });
  const statusCode = response.status;

  const { data, errors } = await response.json();

  return { data, errors, statusCode };
};

export const createHeaders = (headersValue: string): RequestInit["headers"] => {
  try {
    const headers = headersValue ? JSON.parse(headersValue) : {};
    return { "Content-Type": "application/json", ...headers };
  } catch (error: unknown) {
    if (error instanceof SyntaxError) {
      throw error;
    }
  }
};

export const createBody = (
  query: string,
  variablesValue: string,
): RequestInit["body"] => {
  try {
    const variables = variablesValue ? JSON.parse(variablesValue) : {};
    return JSON.stringify({ query, variables });
  } catch (error: unknown) {
    if (error instanceof SyntaxError) {
      throw error;
    }
  }
};
