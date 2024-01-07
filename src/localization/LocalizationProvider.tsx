import { ReactNode, useState } from "react";

import en from "./en.json";
import { LocalizationContext } from "./LocalizationContext";
import ru from "./ru.json";

const translation = { en, ru };

export const LocalizationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<"en" | "ru">("en");

  const changeLanguage = () => {
    const changedLanguage = language === "en" ? "ru" : "en";
    setLanguage(changedLanguage);
  };

  return (
    <LocalizationContext.Provider
      value={{
        setLanguage: changeLanguage,
        translation: translation[language],
        language,
      }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};
