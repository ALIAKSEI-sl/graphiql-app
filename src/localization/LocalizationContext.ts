import { createContext } from "react";

import { LocalizationContextType } from "../types/localization";

export const LocalizationContext =
  createContext<LocalizationContextType | null>(null);
