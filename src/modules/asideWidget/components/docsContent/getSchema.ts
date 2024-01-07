import { getIntrospectionQuery, IntrospectionQuery } from "graphql";

import { authMessagesType } from "../../../../types/localization";
import { showToastMessage } from "../../../forms/util/showToastMessage";

export const getSchema = async (
  url: string,
  dictionary: authMessagesType,
): Promise<IntrospectionQuery | undefined> => {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: getIntrospectionQuery(),
      }),
    });
    const schema = await res.json();

    return schema.data;
  } catch (e) {
    showToastMessage(dictionary.docs, "red");
    return undefined;
  }
};
