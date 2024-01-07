import { useContext } from "react";

import { LocalizationContext } from "../localization/LocalizationContext";
import { LocalizationContextType } from "../types/localization";

export const useChangeLanguage = () => {
  const { setLanguage, language } = useContext(
    LocalizationContext,
  ) as LocalizationContextType;

  return { setLanguage, language };
};
