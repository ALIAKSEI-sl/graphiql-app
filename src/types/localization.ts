import en from "../localization/en.json";

export type LocalizationContextType = {
  setLanguage: () => void;
  translation: translationType;
  language: "en" | "ru";
};

export type translationType = typeof en;

export type validationType = typeof en.validation;

export type authMessagesType = typeof en.auth_messages;

export type apiWidgetType = typeof en.api_widget;
