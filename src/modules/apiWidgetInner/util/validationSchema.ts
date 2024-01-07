import * as Yup from "yup";

import { apiWidgetType } from "../../../types/localization";

export function validationSchemaNewApi(dictionary: apiWidgetType) {
  const { necessary, url } = dictionary.validation;
  return Yup.object().shape({
    api: Yup.string().required(necessary).url(url),
  });
}
