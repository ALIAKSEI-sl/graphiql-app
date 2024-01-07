import { useContext } from "react";

import { LocalizationContext } from "../localization/LocalizationContext";
import { LocalizationContextType } from "../types/localization";

export const useLocalization = () => {
  const { translation } = useContext(
    LocalizationContext,
  ) as LocalizationContextType;

  return translation;
};
