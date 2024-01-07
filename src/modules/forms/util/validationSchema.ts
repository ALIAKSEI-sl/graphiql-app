import * as Yup from "yup";

import { validationType } from "../../../types/localization";

export function validationSchemaRegistration(dictionary: validationType) {
  return Yup.object().shape({
    name: Yup.string()
      .required(dictionary.name.necessarily)
      .matches(/^\p{Lu}/u, dictionary.name.capital_letter),
    email: Yup.string()
      .required(dictionary.email.necessarily)
      .email(dictionary.email.incorrect),
    password: Yup.string()
      .required(dictionary.password.necessarily)
      .min(8, dictionary.password.min)
      .matches(/(?=.*\p{Lu})/u, dictionary.password.capital_letter)
      .matches(/[a-zа-я]/, dictionary.password.lowercase_letter)
      .matches(/[0-9]/, dictionary.password.number)
      .matches(/[!@#$%^&*]/, dictionary.password.special_character),
    confirmPassword: Yup.string()
      .required(dictionary.confirm_password.necessarily)
      .oneOf([Yup.ref("password"), ""], dictionary.confirm_password.match),
  });
}

export function validationSchemaLogin(dictionary: validationType) {
  return Yup.object().shape({
    email: Yup.string()
      .required(dictionary.email.necessarily)
      .email(dictionary.email.incorrect),
    password: Yup.string()
      .required(dictionary.password.necessarily)
      .min(8, dictionary.password.min)
      .matches(/(?=.*\p{Lu})/u, dictionary.password.capital_letter)
      .matches(/(?=.*\p{Ll})/u, dictionary.password.lowercase_letter)
      .matches(/[0-9]/, dictionary.password.number)
      .matches(/(?=.*[\W_])/, dictionary.password.special_character),
  });
}
