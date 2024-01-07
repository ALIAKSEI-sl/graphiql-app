import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { registerWithEmailAndPassword } from "../../../api/firebase";
import { useChangeLanguage } from "../../../hooks/useChangeLanguage";
import { useLocalization } from "../../../hooks/useLocalization";
import { RegistrationType } from "../../../types/forms";
import Button from "../../../UI/button/Button";
import { validationSchemaRegistration } from "../util/validationSchema";
import classes from "./form.module.scss";
import CustomInput from "./input/CustomInput";

type controlsType = "email" | "password" | "name" | "confirmPassword";

const Registration = () => {
  const dictionary = useLocalization();
  const { language } = useChangeLanguage();

  const validationSchema = validationSchemaRegistration(dictionary.validation);

  const formMethods = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const { formState } = formMethods;

  useEffect(() => {
    const keys = Object.keys(formState.dirtyFields);
    keys.forEach((key) => {
      const controlName = key as controlsType;
      formMethods.trigger(controlName);
    });
  }, [language]);

  const onSubmit = ({ name, email, password }: RegistrationType) => {
    registerWithEmailAndPassword(
      { name, email, password },
      dictionary.auth_messages,
    );
  };

  return (
    <div className={classes.wrapForm}>
      <h4 className={classes.title}>{dictionary.navigation.registration}</h4>
      <FormProvider {...formMethods}>
        <form
          className={classes.form}
          onSubmit={formMethods.handleSubmit(onSubmit)}
        >
          <CustomInput
            label={dictionary.forms.name}
            name="name"
            type={"text"}
          />
          <CustomInput
            label={dictionary.forms.email}
            name="email"
            type={"email"}
          />
          <CustomInput
            label={dictionary.forms.password}
            name="password"
            type={"password"}
          />
          <CustomInput
            label={dictionary.forms.confirm_password}
            name="confirmPassword"
            type={"password"}
          />
          <Button
            type="submit"
            btnStyle={"primary"}
            btnType="rectangle"
            className={classes["submit-btn"]}
          >
            {dictionary.navigation.registration}
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default Registration;
